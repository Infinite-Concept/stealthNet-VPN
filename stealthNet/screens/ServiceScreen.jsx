import { StyleSheet, Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import ArrowCompo from '../component/ArrowCompo'
import { useNavigation } from '@react-navigation/native'

const ServiceScreen = () => {
    const navigation = useNavigation()

  return (
    <View style={styles.home}>
      <ScrollView style={styles.homeWrapper}>
        <View style={styles.navTop}>
            <ArrowCompo />
            <Text style={styles.navTopIcontext}>Service</Text>
            <Text></Text>
        </View>

        <View style={styles.homeContainer}>
            <View style={styles.serviceContent}>
                <Text style={styles.serviceHeader}>Our Service</Text>
                <Text style={styles.serviceDesc}>
                    Create moments of impact for your users when they’re on the app and ensure they continue to remain engaged.
                </Text>

                <View style={styles.serviceConWrapper}>
                    <Text style={styles.serviceDescCon}>
                        <Text style={styles.serviceTitle}>AXP Scenes – </Text> 
                        <Text style={styles.serviceDesc}> 
                            Inform and engage users with carousel-like images showcasing the value of the app right from the onboarding stage
                        </Text>
                    </Text>

                    <Text style={styles.serviceDescCon}>
                        <Text style={styles.serviceTitle}>Message Center –</Text> 
                        <Text style={styles.serviceDesc}> 
                            Quickly and easily send interactive messages inside the app
                        </Text>
                    </Text>

                    <Text style={styles.serviceDescCon}>
                        <Text style={styles.serviceTitle}>AXP Experiments –</Text> 
                        <Text style={styles.serviceDesc}> 
                            Test the relevancy of your messages so only the most engaging messages go out to your wider audience
                        </Text>
                    </Text>

                    <Text style={styles.serviceDescCon}>
                        <Text style={styles.serviceTitle}>In-App Messages –</Text> 
                        <Text style={styles.serviceDesc}> 
                            Make the most of every moment you’ve got with customers while they’re actively using your app
                        </Text>
                    </Text>
                </View>
            </View>

            <View style={[styles.serviceContent, {paddingBottom: 80, paddingTop: 40}]}>
                <Text style={styles.serviceHeader}>Next-level Personalization</Text>
                <Text style={styles.serviceDesc}>
                    Use first and zero party data to understand each user and deliver better, more relevant experiences that create memorable moments
                </Text>

                <View style={styles.serviceConWrapper}>
                    <Text style={styles.serviceDescCon}>
                        <Text style={styles.serviceTitle}>AXP Scenes – </Text> 
                        <Text style={styles.serviceDesc}> 
                            Inform and engage users with carousel-like images showcasing the value of the app right from the onboarding stage
                        </Text>
                    </Text>

                    <Text style={styles.serviceDescCon}>
                        <Text style={styles.serviceTitle}>Message Center –</Text> 
                        <Text style={styles.serviceDesc}> 
                            Quickly and easily send interactive messages inside the app
                        </Text>
                    </Text>

                    <Text style={styles.serviceDescCon}>
                        <Text style={styles.serviceTitle}>AXP Experiments –</Text> 
                        <Text style={styles.serviceDesc}> 
                            Test the relevancy of your messages so only the most engaging messages go out to your wider audience
                        </Text>
                    </Text>

                    <Text style={styles.serviceDescCon}>
                        <Text style={styles.serviceTitle}>In-App Messages –</Text> 
                        <Text style={styles.serviceDesc}> 
                            Make the most of every moment you’ve got with customers while they’re actively using your app
                        </Text>
                    </Text>
                </View>
            </View>
        </View>

      </ScrollView>
    </View>
  )
}

export default ServiceScreen

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
    serviceContent: {
        marginTop: 15
    },
    serviceHeader: {
        fontSize: 20,
        color: "#ffffff",
        fontFamily: 'Gilroy_ExtraBold',
        marginBottom: 5
    },
    serviceDesc: {
        fontSize: 13,
        fontFamily: "Gilroy_Medium",
        color: "#8F8996",
        lineHeight: 15
    },
    serviceTitle: {
        color: "#ffffff",
        textTransform: "capitalize",
        fontSize: 13,
        fontFamily: "Gilroy_Medium",
    },
    serviceConWrapper: {
        gap: 15,
        marginTop: 30
    }
})