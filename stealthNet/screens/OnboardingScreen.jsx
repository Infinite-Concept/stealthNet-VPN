import { StatusBar, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Google from "../common/Google"
import Apple from "../common/Apple"
import LockIcon from "../common/LockIcon"
import MessageIcon from "../common/MessageIcon"
import Input from '../component/Input'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get("window").width

const OnboardingScreen = () => {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[confirmPwd, setConfirmPwd] = useState("")
  const[signUp, setSignUp] = useState(false)
  const[signIn, setSignIn] = useState(true)
  const navigation = useNavigation()

  const showSignIn = () => {
    setSignIn(true)
    setSignUp(false)
  }

  const showSignUp = () => {
    setSignIn(false)
    setSignUp(true)
  }

  return (
    <View style={styles.home}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" />
      <View style={styles.homeContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Welcome Back!</Text>
          <Text style={styles.headerDesc}>You will get 7 days free trial on creating new account. Make sure you use correct informations</Text>
        </View>

        <View style={styles.authwrapper}>
          <View style={styles.auth}>
            <TouchableOpacity style={[styles.authCon, {borderBottomColor: signIn ? "#00FF6C" : "#2D2D2D",}]} activeOpacity={0.6} onPress={showSignIn}>
              <Text style={[styles.headerDesc, {textTransform: "capitalize"}]}>Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.authCon, {borderBottomColor: signUp ? "#00FF6C" : "#2D2D2D",}]} activeOpacity={0.6} onPress={showSignUp}>
              <Text style={[styles.headerDesc, {textTransform: "capitalize"}]}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.authen}>
          <View style={styles.authenThird}>
            <Google />
            <Text style={styles.authenThirdText}>Sign up with Google</Text>
          </View>

          <View style={[styles.authenThird, {backgroundColor: "#565353", borderWidth: 0}]}>
            <Apple />
            <Text style={styles.authenThirdText}>Sign up with Apple</Text>
          </View>
        </View>

        <View style={styles.authen}>
          <View style={styles.homeAuthLineCon}>
            <View style={styles.homeAuthLine}></View>
            <Text style={styles.homeAuthLineText}>Or better yet...</Text>
            <View style={styles.homeAuthLine}></View>
          </View>

          <View style={styles.authen}>
            {
              signUp && (
                <View style={{gap: 15}}>
                  <Input place="Email Address" >
                    <MessageIcon />
                  </Input>

                  <Input place="Password" >
                    <LockIcon />
                  </Input>

                  <Input place="Password" >
                    <LockIcon />
                  </Input>

                  <TouchableOpacity style={styles.logIn}>
                    <Text style={[styles.authenThirdText, {color: "#000000"}]}>Log in</Text>
                  </TouchableOpacity>
                </View>
              )
            }

            {
              signIn && (
                <View style={{gap: 15}}>
                  <Input place="Email Address" >
                    <MessageIcon />
                  </Input>

                  <Input place="Password" >
                    <LockIcon />
                  </Input>

                  <TouchableOpacity style={styles.forget} activeOpacity={0.6} onPress={() => navigation.navigate("Forget")}>
                    <Text style={styles.forgetText}>forget password</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.logIn} onPress={() => navigation.navigate("Home")}>
                    <Text style={[styles.authenThirdText, {color: "#000000"}]}>Log in</Text>
                  </TouchableOpacity>
                </View>
              )
            }
            
          </View>
        </View>


      </View>
    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  home: {
    flex: 1
  },
  homeContainer: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    alignItems: "center"
  },
  headerTitle: {
    fontFamily: "Gilroy_ExtraBold",
    color: "#ffffff",
    fontSize: 24,
    marginBottom: 10
  },
  headerDesc: {
    color: "#8F8996",
    fontFamily: "Gilroy_Medium",
    textAlign: "center",
    fontSize: 12
  },
  authwrapper: {
    alignItems: "center",
  },
  auth: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#2D2D2D",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  authen: {
    paddingTop: 20,
    gap: 15
  },
  authenThird: {
    borderColor: "#2D2D2D",
    borderWidth: 1,
    padding: 15,
    flexDirection: "row",
    borderRadius: 20,
    width: "100%",
    justifyContent: "center",
    gap: 20
  },
  authenThirdText: {
    color: "#ffffff",
    fontFamily: "Gilroy_ExtraBold",
    fontSize: 16
  },
  homeAuthLineCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  homeAuthLine: {
    height: 1,
    width: "30%",
    backgroundColor: "#2C2C2C"
  },
  homeAuthLineText: {
    color: "#ffffff",
    fontFamily: "Gilroy_Medium",
    fontSize: 12
  },
  forget: {
    alignItems: "center",
  },
  forgetText: {
    color: "#fff",
    textDecorationLine: 'underline',
    textDecorationColor: "#fff",
    textDecorationStyle: "solid",
    textTransform: "capitalize",
    paddingVertical: 10
  },
  logIn: {
    backgroundColor: "#00FF6C",
    borderRadius: 18,
    alignItems: "center",
    paddingVertical: 12
  },
  authCon: {
    borderBottomWidth: 1,
    padding: 10,
    width: 100
  }
})