const router = require("express").Router()
const User = require("../model/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {body, validationResult} = require('express-validator')
const tranportMailer = require ("../libs/Mailer")
const crypto = require("crypto")


const validateEmail = body("email").trim().isEmail().normalizeEmail().withMessage("Invalid email address").escape()
const validatePassword =  body("password").trim().escape()
const validateUsername =  body("userName").trim().escape()

router.post("/register", validateEmail, validatePassword, validateUsername, async (req, res) => {
    try {

        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        const {email, password, userName} = req.body

        const findEmail = await User.findOne({email})

        if(findEmail){
            return res.status(400).json({message: "email already registered"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        if(!hashedPassword){
            return res.status(500).json({message: "Internal server error"})
        }

        let user = new User({
            email: email,
            userName: userName,
            password: hashedPassword
        })

        let savedUser = await user.save()

        let subject = `You have successful registered with traveler`
        let text = `
            Traveler \n\n\n
            Dear User,
            Welcome to our platform!
            Your registration has been successfully completed.
            Best regards,
            Traveler
        `

        tranportMailer(savedUser.email, subject, text)

        res.status(200).json({message: "User successful create"})
        
    } catch (error) {
        console.log("Unable to connect", error);
        res.status(500).json({message: "Internal server Error"})
    }
})

router.post("/login", validateEmail, validatePassword, async (req, res) => {
    try {

        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user){
            return res.status(401).json({message: "Email address not found"})
        }

        const isMatchPwd = await bcrypt.compare(password, user.password)

        if(!isMatchPwd){
            return res.status(401).json({message: "User not found"})
        }

        const token = jwt.sign({user: user.userName}, process.env.JWT_SECRET, {
            expiresIn: '1h'} )

        res.status(200).json({token})
        
    } catch (error) {
        console.log("Unable to connect", error);
        res.status(500).json({message: "Internal server Error"})
    }
})

router.post("/forget-password", validateEmail, async (req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        const {email} = req.body

        const user = await User.findOne({email})

        if(!user){
            return res.status(401).json({message: "Email address not found"})
        }

        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString()
        const verifyTime = Date.now() + 600000

        user.resetPasswordToken = verifyCode,
        user.resetPasswordCodeExpires = verifyTime

        let saved = await user.save()

        let subject = `Password Reset Confirmation Code`
        let text = `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n`
        + `Please copy and paste the following link, to complete the process:\n\n`
        + `Your confirmation code is: ${verifyCode}\n\n`
        + `If you did not request this, please ignore this email and your password will remain unchanged.\n`

        tranportMailer(saved.email, subject, text)

        res.status(201).json({message: "An email has been sent to your mail, confirm and proceed with you change of password"})
        
    } catch (error) {
        console.log("Unable to connect", error);
        res.status(500).json({message: "Internal server Error"})
    }
})

router.post("/verify-password", async (req, res) => {
    try {

        const {confimationCode} = req.body

        const user = await User.findOne({
            resetPasswordToken: confimationCode,
            resetPasswordCodeExpires: {$gt: Date.now()}
        })

        if(!user){
            return res.status(400).json({message: "Invalid or expired confirmation code"})
        }

        const resetToken = crypto.randomBytes(20).toString("hex")

        user.resetToken = resetToken.toString();
        user.resetPasswordToken = undefined
        user.resetPasswordCodeExpires= undefined
        await user.save()

        res.status(200).json({resetToken})
        
    } catch (error) {
        console.log("Unable to connect", error);
        res.status(500).json({message: "Internal server Error"})
    }
})

router.post("/reset-password", async (req, res) => {
    try {

        const {resetToken, password} = req.body

        const user = await User.findOne({resetToken})

        if(!user){
            return res.status(400).json({message: "Invalid or expired reset token"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        user.password = hashedPassword
        user.resetToken = undefined

        await user.save()

        res.status(200).json({message: "Password updated successfully"})
        
        
    } catch (error) {
        console.log("Unable to connect", error);
        res.status(500).json({message: "Internal server Error"})
    }
})

module.exports = router

