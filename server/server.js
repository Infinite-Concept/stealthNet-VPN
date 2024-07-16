const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const user = require("./Routes/User")
require('dotenv').config()

const app = express()
const port = process.env.PORT

mongoose.connect("mongodb://localhost/VPN")
.then(() => {
    app.listen(port, () => {
        console.log(`server is listening on port ${port}`);
    })
})
.catch((err) => {
    console.log("unable to connect to database", err);
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use("/auth/user", user)