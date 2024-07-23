import { StyleSheet, Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import ArrowCompo from '../component/ArrowCompo'
import { useNavigation } from '@react-navigation/native'

const TermsScreen = () => {
    const navigation = useNavigation()

    return (
      <View style={styles.home}>
        <ScrollView style={styles.homeWrapper}>
          <View style={styles.navTop}>
              <ArrowCompo />
              <Text style={styles.navTopIcontext}>Terms & Conditions</Text>
              <Text></Text>
          </View>
  
          <View style={styles.homeContainer}>
              <View style={styles.serviceContent}>
                  <Text style={styles.serviceHeader}>Our Terms & Conditions</Text>
                  <Text style={[styles.serviceDesc, {marginBottom: 50}]}>
                    Create moments of impact for your users when they’re on the app and ensure they continue to remain engaged. AXP Scenes – Inform and engage users with carousel-like images showcasing the value of the app right from the onboarding stage. Message Center – Quickly and easily send interactive messages inside the app. AXP Experiments – Test the relevancy of your messages so only the most engaging messages go out to your wider audience. In-App Messages – Make the most of every moment you’ve got with customers while they’re actively using your app. Use first and zero party data to understand each user and deliver better, more relevant experiences that create memorable moments. AXP Experiments – Test the relevancy of your messages so only the most engaging messages go out to your wider audience
                  </Text>

                  <Text style={styles.serviceDesc}>
                    Create moments of impact for your users when they’re on the app and ensure they continue to remain engaged. AXP Scenes – Inform and engage users with carousel-like images showcasing the value of the app right from the onboarding stage. Message Center – Quickly and easily send interactive messages inside the app. AXP Experiments – Test the relevancy of your messages so only the most engaging messages go out to your wider audience. In-App Messages – Make the most of every moment you’ve got with customers while they’re actively using your app. Use first and zero party data to understand each user and deliver better, more relevant experiences that create memorable moments. AXP Experiments – Test the relevancy of your messages so only the most engaging messages go out to your wider audience
                  </Text>

              </View>
  
          </View>
  
        </ScrollView>
      </View>
    )
}

export default TermsScreen

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
        marginBottom: 30
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
    serviceContent: {
        marginTop: 15
    },
    serviceHeader: {
        fontSize: 20,
        color: "#ffffff",
        fontFamily: 'Gilroy_ExtraBold',
        marginBottom: 10
    },
    serviceDesc: {
        fontSize: 13,
        fontFamily: "Gilroy_Medium",
        color: "#8F8996",
        lineHeight: 18
    },
})