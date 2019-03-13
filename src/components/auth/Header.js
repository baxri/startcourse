import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import PropTypes from 'prop-types';

class Header extends Component {
    render() {

        const { type } = this.props;

        return (
            <View style={styles.logoContainer}>
                <ImageBackground style={styles.logo}
                    source={require('../../resources/images/road.jpeg')} >
                    <Image style={styles.image} source={require('../../resources/images/brand/title_outlined.png')} ></Image>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    logoContainer: {
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 4,
        borderColor: '#1f3a93',
    },

    logo: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        marginTop: 40,
        height: 70,
        width: 300,
    },
});


export default Header;
