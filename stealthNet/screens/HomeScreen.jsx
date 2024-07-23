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
import { useNavigation } from '@react-navigation/native'
import RNSimpleOpenvpn, { addVpnStateListener, removeVpnStateListener } from 'react-native-simple-openvpn';

const width = Dimensions.get("window").width

const HomeScreen = () => {

    const[connected, setConnected] = useState(false)
    const[showMenu, setShowMenu] = useState(false)
    const navigation = useNavigation()

    const menuNavigate = (page) => {
        navigation.navigate(page)
    }

    async function startOVpn() {
        try {
            // await RNSimpleOpenvpn.connect({
            //     remoteAddress: '192.168.1.1 3000',
            //     ovpnFileName: 'client',
            //     assetsPath: 'ovpn/',
            //     providerBundleIdentifier: 'com.example.RNSimpleOvpnTest.NEOpenVPN',
            //     localizedDescription: 'RNSimpleOvpn',
            //   });
            console.log(removeVpnStateListener());
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <View style={styles.home}>
        <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" />
        <View style={[styles.homewrapper, {backgroundColor: connected ? "#1d2e28" : "#0D0D0D" }]}>
            <View style={styles.bg}>
                <Bgshape color={connected ?  "#0f5132" : "#444252"} />
            </View>

            <View style={styles.content}>
                <TouchableOpacity activeOpacity={0.6} onPress={() => setShowMenu(true)}>
                    <Menu />
                </TouchableOpacity>

                <Text style={styles.notConn}>Not Connected</Text>

                <View style={[styles.conn, {backgroundColor: connected ? "#18392b" : "#0D0D0D",}]}>
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
                    <Map color={connected ?  "#0f513299" : "#44425299"}  />
                </View>

                <View style={{alignItems: "center", justifyContent: "center", paddingBottom: 10}}>
                    <View style={[styles.firstRound, styles.round]}>
                        <View style={[styles.secondRound, styles.round]}>
                            <Shadow distance={90} startColor={connected ?'#0f5132' : "#444252"} >
                                <TouchableOpacity style={[styles.thirdRound, styles.round, {backgroundColor: connected ?  "#14452f" : "#444252", borderColor: connected ?  "#18392b" : "#ffffff" }]} activeOpacity={0.8}
                                //  onPress={() => setConnected(!connected)}
                                onPress={() => startOVpn() }
                                    >
                                    <Power color="#fff" />
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

                <TouchableOpacity activeOpacity={0.6} onPress={() => menuNavigate("Profile")}>
                    <Text style={styles.menuText}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.6} onPress={() => menuNavigate("Service")}>
                    <Text style={styles.menuText}>Service</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.6} onPress={() => menuNavigate("Setting")}>
                    <Text style={styles.menuText}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.6} onPress={() => menuNavigate("Terms")}>
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
        elevation: 10,
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
        borderColor: "#444252",
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
        alignItems: "center",
        backgroundColor: "#0D0D0D"
    }
})