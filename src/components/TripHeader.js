import React, {Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Icon, Text} from 'native-base';
import {StyleSheet, View, KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native'
import {Actions} from "react-native-router-flux";

const leftIcon = require('../../assets/icons/left.png');
const rightIcon = require('../../assets/icons/right.png');


export default class TripHeader extends Component {
    render() {

        const {title} = this.props;

        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => Actions.auth()}>
                    <Image style={styles.image} fadeDuration={0} source={leftIcon}></Image>
                </TouchableOpacity>

                <Text style={styles.text}>{title}</Text>

                <TouchableOpacity>
                    <Image style={styles.image} fadeDuration={0} source={rightIcon}></Image>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {

        paddingTop: 40,
        paddingBottom: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#bdc3c7',
        backgroundColor: 'white',
        elevation: 2,
    },

    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#6c7a89',
        marginTop: 5,
    },

    image: {
        height: 50,
        width: 55,
    }


})
