import React, { Component } from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { Image } from 'react-native';
import PublicContainer from "../../layouts/PublicContainer";
import { Content, Item, Input, Icon, Button, Footer, FooterTab } from 'native-base';
import { Actions } from "react-native-router-flux";

import Header from "../../components/auth/Header";
import ButtonLoader from "../../components/ButtonLoader";

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)

        this.state = {

            form: {

                email: {
                    placeholder: 'Email Address',
                    error: false,
                    retuired: true,
                    icon: 'note',
                    iconType: 'SimpleLineIcons',
                    value: '',
                    secured: false,
                    validate: (value) => value.length === 0
                },
            },

            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
        }
    }

    handleChange = (name, value) => {
        const { form } = this.state;
        this.state.form[name]['value'] = value;
        this.state.form[name]['error'] = this.state.form[name]['validate'](value);
        this.setState({ form });
    }

    render() {

        const { form, loading } = this.state;
        return (
            <PublicContainer>
                <Content>
                    <Header title="Forgot Password" />
                    <View style={styles.formContainer}>
                        {Object.keys(form).map(key => {
                            let field = form[key];
                            return (<Item key={key} style={styles.inputItem} error={field.error}>
                                <Icon active name={field.icon} type={field.iconType} />
                                <Input secureTextEntry={field.secured} style={styles.input} placeholder={field.placeholder} value={field.value} onChangeText={(val) => this.handleChange(key, val)} />
                            </Item>)
                        })}

                        <ButtonLoader
                            loading={loading}
                            style={styles.button}
                            textStyle={styles.buttonText} title="Send Email" />


                        <View style={styles.articlesContainer}>
                            <Button transparent style={styles.articles}>
                                <Text style={styles.articlesText}>Privacy policy</Text>
                            </Button>
                            <Button transparent style={styles.articles}>
                                <Text style={styles.articlesText}>Terms of service</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
                {/* <Footer>
                    <FooterTab>
                       
                    </FooterTab>
                </Footer> */}

            </PublicContainer>
        )
    }
}

const styles = StyleSheet.create({

    formContainer: {
        paddingHorizontal: 30,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },

    inputItem: {
        paddingVertical: 5,
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
        color: '#6c7a89',
    },

    button: {
        marginTop: 100,
        width: '75%',
        justifyContent: 'center',
        backgroundColor: '#19b5fe',
        alignSelf: 'center',
        elevation: 0,
        marginVertical: 30,
        borderRadius: 5,
    },

    articlesContainer: {
        flex: 1,
        flexDirection: 'row',
    },

    articles: {
        marginHorizontal: 15,
        marginBottom: 30,
    },

    articlesText: {
        color: '#bdc3c7',
    },

})
