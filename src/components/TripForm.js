import React, {Component} from 'react'
import {StyleSheet, View, KeyboardAvoidingView} from 'react-native'
import {Image, ImageBackground, Alert} from 'react-native';
import {Content, Item, Input, Icon, Button, Text} from 'native-base';
import {Actions} from "react-native-router-flux";
import {connect} from "react-redux";
import {Ionicons} from '@expo/vector-icons';
import FlashMessage, {showMessage} from "react-native-flash-message";

export default class TripForm extends Component {
    render() {

        return (
            <View style={styles.formContainer}>
                <Item style={styles.inputItem}>
                    <Input placeholder='Test Input' style={styles.input}
                    />
                    <Icon active name='user' type="FontAwesome"/>

                </Item>
                <Item style={styles.inputItem}>
                    <Input placeholder='Test Input' style={styles.input}
                    />
                    <Icon active name='user' type="FontAwesome"/>

                </Item>
                <Item style={styles.inputItem}>
                    <Input placeholder='Test Input' style={styles.input}
                    />
                    <Icon active name='user' type="FontAwesome"/>

                </Item>
                <Item style={styles.inputItem}>
                    <Input placeholder='Test Input' style={styles.input}
                    />
                    <Icon active name='user' type="FontAwesome"/>

                </Item>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    formContainer: {
        marginTop: 15,
        paddingHorizontal: 30,
        flex: 1,
        alignItems: 'center',
        marginBottom: 15,
    },

    inputItem: {
        paddingVertical: 10,
        borderBottomColor: '#2e3131',
    },

    input: {
        fontSize: 14,
    }

});
