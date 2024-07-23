import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MessageIcon from "../common/MessageIcon"
import Input from '../component/Input'
import { useNavigation } from '@react-navigation/native'
import ArrowCompo from '../component/ArrowCompo'

const ForgetScreen = () => {

    const navigation = useNavigation()

  return (
    <View style={styles.home}>
      <View style={styles.homeWrapper}>
        <View style={styles.navTop}>
            <ArrowCompo />

            <Text style={styles.navTopIcontext}>Forgot Password</Text>
            <Text></Text>
        </View>

        <View style={styles.content}>
            <Text style={styles.contentTitle}>
                Forgot Password ?
            </Text>
            <Text style={styles.contentDesc}>
                Enter your email to reset your password. We will send the code to the email so you can reset password
            </Text>

            <Input place="Email Address"  >
                <MessageIcon />
            </Input>

            <TouchableOpacity style={styles.forget} onPress={() => navigation.navigate("Verify")}>
                <Text style={styles.forgetText}>Send code</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ForgetScreen

const styles = StyleSheet.create({
    home: {
        flex: 1,
    },
    homeWrapper: {
        flex: 1,
        backgroundColor: "#0D0D0D",
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    navTop: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    navTopIcon: {
        backgroundColor: "#00FF6C",
        borderRadius: 200,
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    navTopIcontext: {
        color: "#ffffff",
        fontFamily: "Gilroy_Medium",
        fontSize: 16
    },
    content: {
        paddingTop: 40
    },
    contentTitle: {
        color: "#ffffff",
        fontFamily: "Gilroy_ExtraBold",
        fontSize: 24,
        textAlign: "center"
    },
    contentDesc: {
        color: "#8F8996",
        fontSize: 12,
        lineHeight: 18,
        textAlign: "center",
        paddingBottom: 50
    },
    forget: {
        backgroundColor: "#00FF6C",
        borderRadius: 18,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15
    },
    forgetText: {
        fontSize: 16,
        color: "#0D0D0D",
        fontFamily: "Gilroy_ExtraBold",
    }
})