import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { Text } from 'native-base';

function Header({ type, title }) {
    return (
        <View style={styles.logoContainer}>
            {title && <Text style={styles.header}>{title}</Text>}
            {!title && <Image style={styles.image} fadeDuration={0} source={require('../../../assets/login.png')} ></Image>}
        </View>
    )
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

    header: {
        fontSize: 25,
        marginTop: 30,
        marginBottom: 40,
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
