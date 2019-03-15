import React, {Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Icon, Text} from 'native-base';
import {StyleSheet, View, KeyboardAvoidingView, Image, TouchableOpacity, ImageBackground} from 'react-native'
import {Actions} from "react-native-router-flux";
import {AppLoading, Asset, Font} from 'expo';

const homeIcon = require('../../../assets/icons/home.png');
const tripsIcon = require('../../../assets/icons/trip.png');
const bidsIcon = require('../../../assets/icons/bids.png');
const setupIcon = require('../../../assets/icons/setup.png');

export default class FooterTabs extends Component {
    render() {

        const {active} = this.props;

        return (
            <View>
                <Footer style={styles.footer}>
                    <FooterTab style={styles.footerTab}>
                        <Button vertical style={active == 'home' ? styles.buttonActive : styles.button}
                                onPress={() => Actions.home()}>
                            <ImageBackground style={styles.image} fadeDuration={0} source={homeIcon}></ImageBackground>
                            <Text uppercase={false} style={styles.text}>Home</Text>
                        </Button>
                        <Button vertical style={active == 'trip' ? styles.buttonActive : styles.button}
                                onPress={() => Actions.trips()}>
                            <ImageBackground style={styles.image} fadeDuration={0} source={tripsIcon}></ImageBackground>
                            <Text uppercase={false} style={styles.text}>Trips</Text>
                        </Button>
                        <Button vertical style={active == 'bids' ? styles.buttonActive : styles.button}
                                onPress={() => Actions.bids()}>
                            <ImageBackground style={styles.image} fadeDuration={0} source={bidsIcon}></ImageBackground>
                            <Text uppercase={false} style={styles.text}>Bids</Text>
                        </Button>
                        <Button vertical style={active == 'setup' ? styles.buttonActive : styles.button}
                                onPress={() => Actions.setup()}>
                            <ImageBackground style={styles.image} fadeDuration={0} source={setupIcon}></ImageBackground>
                            <Text uppercase={false} style={styles.text}>Setup</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
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
        height: 100,
        borderRadius: 0,
    },

    buttonActive: {
        height: 100,
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
        height: 40,
        width: 40,
        resizeMode: 'stretch'
    },


})

