import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Image, Text } from "react-native";

class Header extends Component {
    render() {

        const { type } = this.props;

        return (
            <View style={styles.logoContainer}>
                {/* <ImageBackground style={styles.logo} imageStyle={{ borderRadius: 20 }} fadeDuration={0}
                    source={require('../../resources/images/road.jpeg')} >
                </ImageBackground> */}

                <Image style={styles.image} fadeDuration={0} source={require('../../../assets/login.png')} ></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    logoContainer: {
        marginTop: 55,
        paddingHorizontal: 30,
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        marginTop: 15,
        marginLeft: 15,
        height: 75,
        width: 300,
        resizeMode: 'stretch',
        marginLeft: -5,
    },
});


export default Header;
