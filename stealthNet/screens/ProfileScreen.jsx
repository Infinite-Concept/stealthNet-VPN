import { StyleSheet, Text, View, TouchableOpacity, StatusBar, ScrollView, Image } from 'react-native'
import React from 'react'
import ArrowCompo from '../component/ArrowCompo'
import { useNavigation } from '@react-navigation/native'
import Input from '../component/Input'
import MessageIcon from "../common/MessageIcon"
import demoImage from "../assets/image/demo.png"

const ProfileScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.home}>
      <ScrollView style={styles.homeWrapper}>
        <View style={styles.navTop}>
            <ArrowCompo />
            <Text style={styles.navTopIcontext}>Edit Profile</Text>
            <Text>Save</Text>
        </View>

        <View style={styles.formCon}>
          <TouchableOpacity style={styles.formImage}>
            <View style={styles.profilePic}>
              <Image source={demoImage} />
            </View>
          </TouchableOpacity>

          <View >
            <Text style={styles.formText}>Info</Text>
            <View style={styles.formGroup}>
              <Input place="User Full Name" >
                <MessageIcon />
              </Input>

              <Input place="Email Address" >
                <MessageIcon />
              </Input>
            </View>
          </View>

          <View style={{marginTop: 30}}>
            <Text style={styles.formText}>Reset Password</Text>
            <View style={styles.formGroup}>
              <Input place="User Full Name" >
                <MessageIcon />
              </Input>

              <Input place="Email Address" >
                <MessageIcon />
              </Input>
            </View>           
          </View>

        </View>

      </ScrollView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  home: {
      flex: 1,
      position: "relative"
  },
  homeWrapper: {
      flex: 1,
      backgroundColor: "#0D0D0D",
      position: "relative",
  },
  homeContainer: {
      paddingHorizontal: 20,
      paddingTop: 10,
  },
  navTop: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 20,
      marginHorizontal: 20
  },
  navTopIcontext: {
      color: "#ffffff",
      fontFamily: "Gilroy_Bold",
      fontSize: 18
  },
  formCon: {
    paddingHorizontal: 20,
    marginTop: 20
  },
  profilePic: {
    backgroundColor: "#202020",
    borderRadius: 200,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  formImage: {
    alignItems: "center",
    marginBottom: 40
  },
  formGroup: {
    gap: 20
  },
  formText: {
    color: "#8F8996",
    fontFamily: 'Gilroy_ExtraBold',
    fontSize: 16,
    marginBottom: 7,
    textTransform: "capitalize"
  }
})