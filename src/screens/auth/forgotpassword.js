import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import { Image } from 'react-native';
import PublicContainer from "../../layouts/PublicContainer";
import { Content, Item, Input, Icon, Button, Footer, FooterTab } from 'native-base';
import { Actions } from "react-native-router-flux";


import Header from "../../components/auth/Header";

export default class ForgotPassword extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'giorgi.bibilashvili89@gmail.com',
        }
    }

    handleChange = (name, value) => {
        this.setState({ [name]: value });
    }

    render() {

        const { username, password } = this.state;

        return (
            <PublicContainer>
                <Content>
                    <Header />
                    <View style={styles.formContainer}>
                        <Item style={styles.inputItem}>
                            <Icon active name='user' type="FontAwesome" />
                            <Input style={styles.input} placeholder='Email Address' value={username} onChangeText={(val) => this.handleChange('username', val)} />
                        </Item>
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button primary style={{ backgroundColor: '#19b5fe' }}>
                            <Text style={styles.buttonText}>SEND EMAIL</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </PublicContainer>
        )
    }
}

const styles = StyleSheet.create({
    formContainer: {
        paddingHorizontal: 30,
        flex: 1,
        padding: 15,
    },

    inputItem: {
        paddingVertical: 5,
        borderBottomColor: '#2e3131',
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    input: {
        fontSize: 16,
    }
})
