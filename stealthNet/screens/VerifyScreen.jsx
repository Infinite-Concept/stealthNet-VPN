import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Arrow from "../common/Arrow"
import MessageIcon from "../common/MessageIcon"
import Input from '../component/Input'
import { OtpInput } from "react-native-otp-entry";
import { useNavigation } from '@react-navigation/native'

const VerifyScreen = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.home}>
      <View style={styles.homeWrapper}>
        <View style={styles.navTop}>
            <TouchableOpacity style={styles.navTopIcon} activeOpacity={0.6} onPress={() => navigation.goBack() }>
                <Arrow />
            </TouchableOpacity>
            <Text style={styles.navTopIcontext}>Verification</Text>
            <Text></Text>
        </View>

        <View style={styles.content}>
            <Text style={styles.contentTitle}>
            Verify Yourself
            </Text>
            <Text style={styles.contentDesc}>
                We send email on ui***@gmail.com make sure you enter 5 digit code correctly
            </Text>

            <View>
                <OtpInput
                numberOfDigits={6}
                focusColor="green"
                focusStickBlinkingDuration={500}
                />
            </View>

            <TouchableOpacity style={styles.forget} activeOpacity={0.6} onPress={() => navigation.navigate("ChangePassword")}>
                <Text style={styles.forgetText}>Verify</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default VerifyScreen

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