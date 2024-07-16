import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import Map from "../common/Map"
import { useNavigation } from '@react-navigation/native'

const height = Dimensions.get("window").height

const SplashScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {

    const timer = setTimeout(() => {
      navigation.navigate("Onboard")
    }, 3000)

    return () => setTimeout(timer)
  }, [])

  return (
    <View style={styles.home}>
      <View style={styles.homeContainer}>
        <View style={styles.map}>
          <Map />
        </View>
        <Text style={styles.text}>StealthNET</Text>
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  home: {
    flex: 1,
    width: "100%",
    position: "relative",
    height: height
  },
  homeContainer: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontFamily: "PowerGrotesk",
    fontSize: 48,
    fontWeight: "700",
  },
  map: {
    position: "absolute"
  }
})