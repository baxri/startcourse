import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { StyleSheet, View, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native'
import { Actions } from "react-native-router-flux";

const homeIcon = require('../../resources/images/icons/home.png');
const tripsIcon = require('../../resources/images/icons/trip.png');
const bidsIcon = require('../../resources/images/icons/bids.png');
const setupIcon = require('../../resources/images/icons/setup.png');

export default class FooterTabs extends Component {
    render() {

        const { active } = this.props;

        return (
            <Footer style={styles.footer}>
              
                <FooterTab style={styles.footerTab}>
                    <Button vertical style={active == 'home' ? styles.buttonActive : styles.button} onPress={() => Actions.home()}>
                        <Image style={styles.image} fadeDuration={0} source={homeIcon} ></Image>
                        <Text uppercase={false} style={styles.text}>Home</Text>
                    </Button>
                    <Button vertical style={active == 'trip' ? styles.buttonActive : styles.button} onPress={() => Actions.trips()}>
                        <Image style={styles.image} fadeDuration={0} source={tripsIcon} ></Image>
                        <Text uppercase={false} style={styles.text}>Trips</Text>
                    </Button>
                    <Button vertical style={active == 'bids' ? styles.buttonActive : styles.button} onPress={() => Actions.bids()}>
                        <Image style={styles.image} fadeDuration={0} source={bidsIcon} ></Image>
                        <Text uppercase={false} style={styles.text}>Bids</Text>
                    </Button>
                    <Button vertical style={active == 'setup' ? styles.buttonActive : styles.button} onPress={() => Actions.setup()}>
                        <Image style={styles.image} fadeDuration={0} source={setupIcon} ></Image>
                        <Text uppercase={false} style={styles.text}>Setup</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}

const styles = StyleSheet.create({

    footerTab: {
        backgroundColor: '#eeeeee',
        borderTopWidth: 1,
        borderTopColor: '#bdc3c7',
        height: 100,
    },

    footer: {
        height: 100,
    },

    button: {
        borderRadius: 0,
    },

    buttonActive: {
        borderTopWidth: 3,
        borderTopColor: '#6c7a89',
        borderRadius: 0,
    },

    text: {
        color: '#2e3131',
        fontSize: 15,
        marginTop: 10,
        marginBottom: 10,
    },

    image: {
        marginTop: 10,
        height: 40,
        width: 40,
        resizeMode: 'stretch'
    },


})

