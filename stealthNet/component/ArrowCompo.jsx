import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Arrow from "../common/Arrow"
import { useNavigation } from '@react-navigation/native'
import { Shadow } from 'react-native-shadow-2';

const ArrowCompo = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.round}>
        <Shadow distance={20} startColor={'#00FF6C'} >
            <TouchableOpacity style={styles.navTopIcon} activeOpacity={0.6} onPress={() => navigation.goBack() }>
                <Arrow color="#fff" />
            </TouchableOpacity>
        </Shadow>
    </View>
  )
}

export default ArrowCompo

const styles = StyleSheet.create({
    round: {
        backgroundColor: "#00FF6C",
        borderRadius: 200,
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    navTopIcon: {
        
        
    },
})