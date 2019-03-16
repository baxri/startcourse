import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { StyleSheet, View, KeyboardAvoidingView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { Actions } from "react-native-router-flux";
import { AppLoading, Asset, Font } from 'expo';

const homeIcon = require('../../../assets/icons/home.png');
const tripsIcon = require('../../../assets/icons/trip.png');
const bidsIcon = require('../../../assets/icons/bids.png');
const setupIcon = require('../../../assets/icons/setup.png');

export default class FooterTabs extends Component {
    render() {


        const { active } = this.props;

        return (
            <Footer style={styles.footer}>
                <FooterTab style={styles.footerTab}>
                    <Button vertical style={active == 'home' ? styles.buttonActive : styles.button}
                        onPress={() => Actions.home()}>
                        <Icon style={active == 'home' ? styles.iconActive : styles.icon} active name='home' type="FontAwesome" />
                        <Text uppercase={false} style={active == 'home' ? styles.textActive : styles.text}>Home</Text>
                    </Button>
                    <Button vertical style={active == 'trip' ? styles.buttonActive : styles.button}
                        onPress={() => Actions.trips()}>
                        <Icon style={active == 'trip' ? styles.iconActive : styles.icon} active name='map' type="FontAwesome" />
                        <Text uppercase={false} style={active == 'trip' ? styles.textActive : styles.text}>Trips</Text>
                    </Button>
                    <Button vertical style={active == 'bids' ? styles.buttonActive : styles.button}
                        onPress={() => Actions.bids()}>
                        <Icon style={active == 'bids' ? styles.iconActive : styles.icon} active name='attach-money' type="MaterialIcons" />
                        <Text uppercase={false} style={active == 'bids' ? styles.textActive : styles.text}>Bids</Text>
                    </Button>
                    <Button vertical style={active == 'setup' ? styles.buttonActive : styles.button}
                        onPress={() => Actions.setup()}>
                        <Icon style={active == 'setup' ? styles.iconActive : styles.icon} active name='settings' type="SimpleLineIcons" />
                        <Text uppercase={false} style={active == 'setup' ? styles.textActive : styles.text}>Setup</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}

const styles = StyleSheet.create({

    footerTab: {
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#bdc3c7',
        height: 70,
    },

    footer: {
        height: 70,
    },

    button: {
        height: 70,
        borderRadius: 0,
    },

    buttonActive: {
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

