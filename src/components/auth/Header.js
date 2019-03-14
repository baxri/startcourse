import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Image, Text } from "react-native";
import PropTypes from 'prop-types';

class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            appIsReady: false
        }
    }


    async componentWillMount() {
        // Wait for both fonts and images
        await Promise.all([
            this._cacheResourcesAsync(),
        ]).catch(err => { });
        this.setState({ appIsReady: true });
    }

    async _cacheResourcesAsync() {
        const images = [
            require('../../resources/images/road.jpeg'),
            require('../../resources/images/brand/title_outlined.png'),
        ];
        // Asset.loadAsync takes an array and this way we can load the images in parallel
        await Asset.loadAsync(images);
    }

    render() {

        const { type } = this.props;

        if (!this.state.appIsReady) {
            return (<Text>LOADING APP!</Text>);
        }

        return (
            <View style={styles.logoContainer}>
                <ImageBackground style={styles.logo} imageStyle={{ borderRadius: 20 }} fadeDuration={0}
                    source={require('../../resources/images/road.jpeg')} >
                    <Image style={styles.image} fadeDuration={0} source={require('../../resources/images/brand/title_outlined.png')} ></Image>
                </ImageBackground>
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
        height: 59,
        width: 250,
        resizeMode: 'stretch'
    },
});


export default Header;
