import React, { Component } from 'react'
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { Image, ImageBackground, Alert } from 'react-native';
import PublicContainer from "../../layouts/PublicContainer";
import { Content, Item, Input, Icon, Button, Text } from 'native-base';
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { setAccessToken, setUser } from "../../actions/index";
import { Ionicons } from '@expo/vector-icons';
import FlashMessage, { showMessage } from "react-native-flash-message";
import { Button as Element } from 'react-native-elements';

import Header from "../../components/auth/Header";
import ButtonLoader from "../../components/ButtonLoader";

class login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            loading: false,
        }
    }

    handleChange = (name, value) => {
        this.setState({ [name]: value });
    }

    login = () => {

        const { username, password, loading } = this.state;
        const { setAccessToken, setUser } = this.props;

        if (username.length == 0) {
            showMessage({
                message: "Email is required!",
                type: "danger",
            });
            return;
        }

        if (password.length == 0) {
            showMessage({
                message: "Password is required!",
                type: "danger",
            });
            return;
        }

        this.setState({ loading: true });


        setTimeout(() => {
            let user = {
                username, password
            }

            setAccessToken('H)D)*HD)SH)(*SDH)F*HSDFDSDISIUSDHSDHFIUSDHF&*F(D&*S^FDF');
            setUser(user);

            Actions.reset('auth');
            Actions.private();

        }, 600);

    }

    render() {

        const { username, password, loading } = this.state;
        return (
            <PublicContainer showTabs={true} active="home">
                <Header />
                <View style={styles.formContainer}>
                    <Item style={styles.inputItem}>
                        <Icon active name='user' type="SimpleLineIcons" />
                        <Input placeholder='Email Address' style={styles.input} value={username}
                            onChangeText={(val) => this.handleChange('username', val)} />
                    </Item>
                    <Item style={styles.inputItem}>
                        <Icon active name='lock' type="SimpleLineIcons" />
                        <Input secureTextEntry={true} style={styles.input} placeholder='Password' value={password}
                            onChangeText={(val) => this.handleChange('password', val)} />
                    </Item>

                    <ButtonLoader
                        loading={loading}
                        onPress={this.login}
                        style={styles.buttonLogin}
                        textStyle={styles.LoginbuttonText} title="LOGIN" />

                    <Button transparent info block style={{ marginTop: 10, }} onPress={() => Actions.register()}>
                        <Text uppercase={false} style={styles.buttonTextDark}>Not registered?</Text>
                        <Text uppercase={false} style={[styles.buttonTextBlue, { marginLeft: -20, }]}>Sign up here</Text>
                    </Button>

                    <Button transparent info block style={{ marginTop: 40, }} onPress={() => Actions.forgotpassword()}>
                        <Text uppercase={false} style={styles.buttonTextBlue}>Forgot Password?</Text>
                    </Button>
                </View>
            </PublicContainer>
        )
    }
}

const styles = StyleSheet.create({
    formContainer: {
        marginTop: 15,
        paddingHorizontal: 30,
        flex: 1,
        alignItems: 'center',
    },

    titleView: {
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.8,
        // shadowRadius: 3,
        // borderRadius: 10,
        // backgroundColor: 'rgba(255, 255, 255, 0.3)',
        // elevation: 1,
        // borderWidth: 1,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 35,
        color: '#fff',
        padding: 20,
    },

    buttonLogin: {
        padding: 20,
        marginTop: 50,
        height: 50,
        marginHorizontal: 55,
        borderWidth: 0,
        backgroundColor: '#19b5fe',
        elevation: 0,
    },

    buttonForgot: {
    },

    LoginbuttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    buttonTextDark: {
        color: '#2e3131',
        fontSize: 14,
    },

    buttonTextBlue: {
        color: '#19b5fe',
        fontSize: 14,
    },

    buttonView: {
        // flexDirection: 'row',
    },


    inputItem: {
        borderBottomColor: '#2e3131',
    },

    input: {
        fontSize: 17,
    }

});

export default connect(null, { setAccessToken, setUser })(login);
