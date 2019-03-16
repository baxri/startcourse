import React, { Component } from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { Image } from 'react-native';
import PublicContainer from "../../layouts/PublicContainer";
import { Content, Item, Input, Icon, Button, Footer, FooterTab } from 'native-base';
import { Actions } from "react-native-router-flux";

import Header from "../../components/auth/Header";

export default class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {

            form: {
                username: {
                    placeholder: 'Email Address',
                    error: true,
                    retuired: true,
                    icon: 'email',
                    iconType: 'MaterialCommunityIcons',
                    value: '',
                    validate: (value) => value.length === 0
                },
                password: {
                    placeholder: 'Password',
                    error: false,
                    retuired: true,
                    icon: 'lock',
                    iconType: 'FontAwesome',
                    value: '',
                    validate: (value) => value.length === 0
                },
                passwordConfirm: {
                    placeholder: 'Confirm Password',
                    error: false,
                    retuired: true,
                    icon: 'lock',
                    iconType: 'FontAwesome',
                    value: '',
                    validate: (value) => value.length === 0
                },
                firstName: {
                    placeholder: 'FirstName',
                    error: false,
                    retuired: true,
                    icon: 'user',
                    iconType: 'FontAwesome',
                    value: '',
                    validate: (value) => value.length === 0
                },
                lastName: {
                    placeholder: 'LastName',
                    error: false,
                    retuired: true,
                    icon: 'user',
                    iconType: 'FontAwesome',
                    value: '',
                    validate: (value) => value.length === 0
                }
            },

            username: '',
            password: '',
            passwordConfirm: '',
            firstName: 'George',
            lastName: 'Bibilashvili',
        }
    }

    handleChange = (name, value) => {
        const { form } = this.state;
        this.state.form[name]['value'] = value;
        this.state.form[name]['error'] = this.state.form[name]['validate'](value);
        this.setState({ form });
    }

    render() {

        const { form } = this.state;
        return (
            <PublicContainer>
                <Content>
                    <Header />
                    <View style={styles.formContainer}>

                        {Object.keys(form).map(key => {

                            let field = form[key];

                            return (<Item key={key} style={styles.inputItem} error={field.error}>
                                <Icon active name={field.icon} type={field.iconType} />
                                <Input style={styles.input} placeholder={field.placeholder} value={field.value} onChangeText={(val) => this.handleChange(key, val)} />
                            </Item>)
                        })}
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button primary style={{backgroundColor: '#19b5fe'}}>
                            <Text style={styles.buttonText}>REGISTER</Text>
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
        alignItems: 'center',
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

    buttonTextDark: {
        color: 'gray',
        fontSize: 16,
        fontWeight: 'bold',
    },

    input: {
        fontSize: 17,
    }
})
