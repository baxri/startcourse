import React, { Component } from 'react'
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { Image } from 'react-native';
import PublicContainer from "../../layouts/PublicContainer";
import { Content, Item, Input, Icon, Button, Text } from 'native-base';
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { setAccessToken } from "../../actions/index";

class login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'baxri',
            password: 'gio123456',
        }
    }

    handleChange = (name, value) => {
        this.setState({ [name]: value });
    }

    login = () => {
        const { username, password } = this.state;
        const { setAccessToken } = this.props;
        setAccessToken('H)D)*HD)SH)(*SDH)F*HSDFDSDISIUSDHSDHFIUSDHF&*F(D&*S^FDF');

        Actions.reset('auth');
        Actions.private();
    }

    render() {

        const { username, password } = this.state;

        return (
            <PublicContainer>
                <Content>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../../resources/images/logo.png')} />
                        <Text style={styles.title}>Test App</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <Item style={styles.inputItem}>
                            <Icon active name='home' />
                            <Input placeholder='Username' value={username} onChangeText={(val) => this.handleChange('username', val)} />
                        </Item>
                        <Item style={styles.inputItem}>
                            <Icon active name='swap' />
                            <Input placeholder='Password' value={password} onChangeText={(val) => this.handleChange('password', val)} />
                        </Item>

                        <Button primary block style={styles.button} onPress={this.login}>
                            <Text style={styles.buttonText}>Login</Text>
                        </Button>

                        <Button light block style={styles.button} onPress={() => Actions.register()}>
                            <Text style={styles.buttonTextDark}>Register</Text>
                        </Button>
                    </View>
                </Content>
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
        flex: 1,
        alignItems: 'center',
        padding: 15,
    },

    logo: {
        marginTop: 15,
        height: 120,
        width: 120,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 15,
        color: 'gray',
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

export default connect(null, { setAccessToken })(login);
