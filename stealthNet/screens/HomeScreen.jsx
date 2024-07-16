import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, Modal } from 'react-native'
import React, { useState } from 'react'
import Bgshape from "../common/Bgshape"
import Arrow from "../common/Arrow"
import Menu from "../common/Menu"
import World from "../common/World"
import Map from "../common/Map"
import Power from "../common/Power"
import Close from "../common/Close"
import { Shadow } from 'react-native-shadow-2';

const width = Dimensions.get("window").width

const HomeScreen = () => {

    const[connected, setConnected] = useState(false)
    const[showMenu, setShowMenu] = useState(false)

  return (
    <View style={styles.home}>
        <StatusBar barStyle="light-content" backgroundColor="#3B3A48" />
        <View style={[styles.homewrapper, {backgroundColor: connected ? "#22156F" : "#3B3A48" }]}>
            <View style={styles.bg}>
                <Bgshape color={connected ?  "#674FF78C" : "#444252"} />
            </View>

            <View style={styles.content}>
                <TouchableOpacity activeOpacity={0.6} onPress={() => setShowMenu(true)}>
                    <Menu />
                </TouchableOpacity>

                <Text style={styles.notConn}>Not Connected</Text>

                <View style={[styles.conn, {backgroundColor: connected ? "#674FF7" : "#3B3A48",}]}>
                    <View style={styles.connWra}>
                        <View style={styles.world}>
                            <World />
                        </View>

                        <View style={styles.server}>
                            <Text style={styles.serverText}>Faster Server</Text>
                            <Text style={styles.serverText2}>212.369.56.87</Text>
                        </View>
                    </View>

                    <View>
                        <Arrow />
                    </View>
                </View>
            </View>

            <View style={styles.connBtnCon}>
                <View style={styles.map}>
                    <Map color={connected ?  "#674FF78C" : "#444252"}  />
                </View>

                <View style={{alignItems: "center", justifyContent: "center", paddingBottom: 10}}>
                    <View style={[styles.firstRound, styles.round]}>
                        <View style={[styles.secondRound, styles.round]}>
                            <Shadow distance={90} startColor={'#674FF766'} >
                                <TouchableOpacity style={[styles.thirdRound, styles.round, {backgroundColor: connected ?  "#674FF7" : "#444252", borderColor: connected ?  "#816CFF" : "#674FF7" }]} activeOpacity={0.6} onPress={() => setConnected(!connected)}>
                                    <Power color={connected ?  "#fff" : "#674FF7"} />
                                </TouchableOpacity>
                            </Shadow>
                        </View>
                    </View>
                </View>
            </View>
        </View>

        <Modal visible={showMenu}>
            <View style={[styles.homewrapper, styles.showModal]}>
                <TouchableOpacity activeOpacity={0.6} onPress={() => setShowMenu(false)} style={{alignSelf: "flex-start"}}>
                    <Close />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.menuText}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.menuText}>Service</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.menuText}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.menuText}>Terms & Conditions</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.menuText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    home: {
        flex: 1,
        position: "relative"
    },
    homewrapper: {
        flex: 1,
        backgroundColor: "#3B3A48",
        position: "relative"
    },
    bg: {
        position: "absolute",
        top: 0,
        left: 0
    },
    content: {
        paddingHorizontal: 20,
        paddingTop: 15
    },
    conn: {
        alignItems: "center",
        marginTop: 15,
        borderRadius: 24,
        shadowColor: "#00000040",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        flexDirection: "row",
        paddingVertical: 25,
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    notConn: {
        color: "#ffffff",
        textAlign: "center",
        fontFamily: 'Gilroy_ExtraBold',
        fontSize: 30,
        marginTop: 10
    },
    world: {
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        borderRadius: 200,
        backgroundColor: "#4F4E5B"
    },
    connWra: {
        flexDirection: "row",
        gap: 20
    },
    connBtnCon: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%"
    },
    map: {
        position: "absolute",
        bottom: 0
    },
    round: {
        borderRadius: 200,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#674FF7",
    },
    firstRound: { 
        width: width - 50,
        height: width - 50,
        borderWidth: 2,   
    },
    secondRound: {
        width: width - 90,
        height: width - 90,
        borderWidth: 2,
    },
    thirdRound: {
        width: width - 130,
        height: width - 130,
        borderWidth: 10,
    },
    serverText: {
        color: "#ffffff",
        fontFamily: 'Gilroy_ExtraBold',
        fontSize: 16,
    },
    serverText2: {
        color: "#79798A"
    },
    server: {
        gap: 5
    },
    menuText: {
        fontFamily: 'Gilroy_Medium',
        color: "#ffffff",
        fontSize: 22
    },
    showModal: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        gap: 40,
        alignItems: "center"
    }
})