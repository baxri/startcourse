import React, { Component } from 'react'
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { Image, ImageBackground, Alert } from 'react-native';
import PublicContainer from "../../layouts/PublicContainer";
import { Content, Item, Input, Icon, Button, Text } from 'native-base';
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { setAccessToken } from "../../actions/index";
import { Ionicons } from '@expo/vector-icons';
import FlashMessage, { showMessage } from "react-native-flash-message";
import { Button as Element } from 'react-native-elements';

import Header from "../../components/auth/Header";
import Error from "../../components/modals/Error";

class login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = (name, value) => {
        this.setState({ [name]: value });
    }

    login = () => {

        const { username, password } = this.state;

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


        Alert.alert("Login not implemented yet!");

        // const { username, password } = this.state;
        // const { setAccessToken } = this.props;
        // setAccessToken('H)D)*HD)SH)(*SDH)F*HSDFDSDISIUSDHSDHFIUSDHF&*F(D&*S^FDF');

        // Actions.reset('auth');
        // Actions.private();
    }

    render() {

        const { username, password } = this.state;
        return (
            <PublicContainer showTabs={true} active="home">
                <Header />
                <View style={styles.formContainer}>
                    <Item style={styles.inputItem}>
                        <Icon active name='user' type="FontAwesome" />
                        <Input placeholder='Email Address' style={styles.input} value={username}
                            onChangeText={(val) => this.handleChange('username', val)} />
                    </Item>
                    <Item style={styles.inputItem}>
                        <Icon active name='lock' type="FontAwesome" />
                        <Input secureTextEntry={true} style={styles.input} placeholder='Password' value={password}
                            onChangeText={(val) => this.handleChange('password', val)} />
                    </Item>


                    <View style={styles.buttonView}>
                        <Button primary block style={styles.buttonLogin} onPress={this.login}>
                            <Text uppercase={false} style={styles.buttonTextDark}>Log In</Text>
                        </Button>
                        <Button light block style={styles.buttonSignup} onPress={() => Actions.register()}>
                            <Text uppercase={false} style={styles.buttonTextDark}>Sign Up</Text>
                        </Button>
                    </View>


                    <Button transparent info block style={styles.buttonForgot} onPress={() => Actions.forgotpassword()}>
                        <Text uppercase={false} style={styles.buttonTextDark}>Forgot Password?</Text>
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
        marginTop: 15,
        height: 50,
        marginRight: 10,
        borderWidth: 0,
        backgroundColor: '#d2d7d3',
    },

    buttonSignup: {
        marginLeft: 10,
        padding: 20,
        marginTop: 15,
        height: 50,
        borderWidth: 0,
        backgroundColor: '#d2d7d3',
    },

    buttonForgot: {
        marginTop: 20,
    },

    buttonText: {
        color: 'white',
        fontSize: 14,
    },

    buttonTextDark: {
        color: '#2e3131',
        fontSize: 14,
    },

    buttonView: {
        flexDirection: 'row',
    },

    inputItem: {
        paddingVertical: 10,
        borderBottomColor: '#2e3131',
    },

    input: {
        fontSize: 14,
    }

});

export default connect(null, { setAccessToken })(login);
