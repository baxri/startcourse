import React, {Component} from 'react'
import {StyleSheet, View, KeyboardAvoidingView} from 'react-native'
import {Image, ImageBackground, Alert} from 'react-native';
import PublicContainer from "../../layouts/PublicContainer";
import {Content, Item, Input, Icon, Button, Text} from 'native-base';
import {Actions} from "react-native-router-flux";
import {connect} from "react-redux";
import {setAccessToken} from "../../actions/index";
import {Ionicons} from '@expo/vector-icons';
import FlashMessage, {showMessage} from "react-native-flash-message";

import Header from "../../components/auth/Header";
import Error from "../../components/modals/Error";

class login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'giorgi.bibilashvili89@gmail.com',
            password: 'test123456',
        }
    }

    handleChange = (name, value) => {
        this.setState({[name]: value});
    }

    login = () => {

        // Actions.error();

        // Alert.alert("Invalid Credetials!");

        showMessage({
            message: "Simple message",
            type: "danger",
        });

        // const { username, password } = this.state;
        // const { setAccessToken } = this.props;
        // setAccessToken('H)D)*HD)SH)(*SDH)F*HSDFDSDISIUSDHSDHFIUSDHF&*F(D&*S^FDF');

        // Actions.reset('auth');
        // Actions.private();
    }

    render() {

        const {username, password} = this.state;
        return (
            <PublicContainer>
                <Header/>
                <Content>
                    <View style={styles.formContainer}>
                        <Item style={styles.inputItem}>
                            <Icon active name='user' type="AntDesign"/>
                            <Input placeholder='Email Address' value={username}
                                   onChangeText={(val) => this.handleChange('username', val)}/>
                        </Item>
                        <Item style={styles.inputItem}>
                            <Icon active name='lock' type="AntDesign"/>
                            <Input secureTextEntry={true} placeholder='Password' value={password}
                                   onChangeText={(val) => this.handleChange('password', val)}/>
                        </Item>

                        <Button primary block style={styles.button} onPress={this.login}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </Button>

                        <Button light block style={styles.button} onPress={() => Actions.register()}>
                            <Text style={styles.buttonTextDark}>Sign Up</Text>
                        </Button>

                        <Button transparent info block style={styles.button} onPress={() => Actions.forgotpassword()}>
                            <Text style={styles.buttonTextDark}>Forgot Password</Text>
                        </Button>
                    </View>
                </Content>
            </PublicContainer>
        )
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
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
});

export default connect(null, {setAccessToken})(login);
