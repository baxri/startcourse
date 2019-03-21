import React from 'react';
import { Footer, FooterTab, Icon, Text } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Actions } from "react-native-router-flux";
import Ripple from 'react-native-material-ripple';

export default ({ active }) => {
    return (
        <Footer style={styles.footer}>
            <FooterTab style={styles.footerTab}>
                <TouchableOpacity vertical style={active == 'home' ? styles.buttonActive : styles.button}
                    onPress={() => Actions.home()}>
                    <Icon style={active == 'home' ? styles.iconActive : styles.icon} active name='home' type="FontAwesome" />
                    <Text uppercase={false} style={active == 'home' ? styles.textActive : styles.text}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity vertical style={active == 'trip' ? styles.buttonActive : styles.button}
                    onPress={() => Actions.trips()}>
                    <Icon style={active == 'trip' ? styles.iconActive : styles.icon} active name='map' type="FontAwesome" />
                    <Text uppercase={false} style={active == 'trip' ? styles.textActive : styles.text}>Trips</Text>
                </TouchableOpacity>
                <TouchableOpacity vertical style={active == 'bids' ? styles.buttonActive : styles.button}
                    onPress={() => Actions.bids()}>
                    <Icon style={active == 'bids' ? styles.iconActive : styles.icon} active name='attach-money' type="MaterialIcons" />
                    <Text uppercase={false} style={active == 'bids' ? styles.textActive : styles.text}>Bids</Text>
                </TouchableOpacity>
                <TouchableOpacity vertical style={active == 'setup' ? styles.buttonActive : styles.button}
                    onPress={() => Actions.setup()}>
                    <Icon style={active == 'setup' ? styles.iconActive : styles.icon} active name='settings' type="SimpleLineIcons" />
                    <Text uppercase={false} style={active == 'setup' ? styles.textActive : styles.text}>Setup</Text>
                </TouchableOpacity>
            </FooterTab>
        </Footer>
    )
}

const styles = StyleSheet.create({

    footerTab: {
        backgroundColor: '#fff',
        borderTopWidth: 0.2,
        borderTopColor: '#bdc3c7',
        height: 70,
        elevation: 1,

    },

    footer: {
        height: 70,
        elevation: 1,
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 70,
        borderRadius: 0,
    },

    buttonActive: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 70,
        borderRadius: 0,
    },

    text: {
        color: '#bdc3c7',
        fontSize: 14,
        marginTop: 5,
    },

    textActive: {
        color: '#19b5fe',
        fontSize: 14,
        marginTop: 5,
    },

    icon: {
        color: '#bdc3c7',
    },

    iconActive: {
        color: '#19b5fe',
    },

    image: {
        height: 40,
        width: 40,
        resizeMode: 'stretch'
    },


})

