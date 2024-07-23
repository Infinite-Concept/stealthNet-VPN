import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ArrowCompo from '../component/ArrowCompo'
import LockIcon from "../common/LockIcon"
import Input from '../component/Input'
import { useNavigation } from '@react-navigation/native'

const ChangePasswordScreen = () => {
    const navigation = useNavigation()

  return (
    <View style={styles.home}>
      <View style={styles.homeWrapper}>
        <View style={styles.navTop}>
            <ArrowCompo />
            <Text style={styles.navTopIcontext}>Change Password</Text>
            <Text></Text>
        </View>

        <View style={styles.content}>
            <Text style={styles.contentTitle}>
                Reset Password
            </Text>
            <Text style={styles.contentDesc}>
                You can reset your password now. Make sure you remeber it now or you can reset again & again
            </Text>

            <View style={{gap: 20}}>
                <Input place="Password"  >
                    <LockIcon />
                </Input>

                <Input place="Confirm Password"  >
                    <LockIcon />
                </Input>
            </View>
            <TouchableOpacity style={styles.forget} onPress={() => navigation.navigate("Verify  ")}>
                <Text style={styles.forgetText}>Change Now</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ChangePasswordScreen

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