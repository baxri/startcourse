import React, { Component } from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { Image } from 'react-native';
import PublicContainer from "../../layouts/PublicContainer";
import { Content, Item, Input, Icon, Button, Footer, FooterTab } from 'native-base';
import { Actions } from "react-native-router-flux";

export default class Register extends Component {
    render() {
        return (
            <PublicContainer>
                <Content>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../../resources/images/logo.png')} />
                    </View>
                    <View style={styles.formContainer}>
                        <Item style={styles.inputItem}>
                            <Icon active name='home' />
                            <Input placeholder='Name' />
                        </Item>
                        <Item style={styles.inputItem}>
                            <Icon active name='home' />
                            <Input placeholder='Surname' />
                        </Item>
                        <Item style={styles.inputItem}>
                            <Icon active name='home' />
                            <Input placeholder='Username' />
                        </Item>
                        <Item style={styles.inputItem}>
                            <Icon active name='swap' />
                            <Input placeholder='Password' />
                        </Item>

                        <Item style={styles.inputItem}>
                            <Icon active name='swap' />
                            <Input placeholder='Password' />
                        </Item>
                        <Item style={styles.inputItem}>
                            <Icon active name='swap' />
                            <Input placeholder='Password' />
                        </Item>
                        <Item style={styles.inputItem}>
                            <Icon active name='swap' />
                            <Input placeholder='Password' />
                        </Item>
                        <Item style={styles.inputItem}>
                            <Icon active name='swap' />
                            <Input placeholder='Password' />
                        </Item>
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button primary>
                            <Text style={styles.buttonText}>Register</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </PublicContainer>
        )
    }
}

const styles = StyleSheet.create({
    logoContainer: {
        marginTop: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    formContainer: {
        flex: 3,
        alignItems: 'center',
        padding: 15,
    },

    logo: {
        height: 50,
        width: 50,
    },

    inputItem: {
        paddingVertical: 10,
    },

    button: {
        padding: 20,
        marginTop: 15,
        height: 60,
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },

    buttonTextDark: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 17,
    },
})
