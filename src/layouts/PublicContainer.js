import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, KeyboardAvoidingView } from 'react-native'
import { Container, Content } from "native-base";


export default class PublicContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dimesions: { width, height } = Dimensions.get('window'),
        }
    }

    _onLayout(e) {
        this.setState({ dimesions: { width, height } = Dimensions.get('window') })
    }

    render() {

        const { children } = this.props;

        return (
            <Container style={styles.container} onLayout={this._onLayout.bind(this)}>
                <KeyboardAvoidingView behavior="padding" style={styles.avoidKeyBoard}>
                    {children}
                </KeyboardAvoidingView>
            </Container >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e4e9ed',
    },

    avoidKeyBoard: {
        flex: 1,
    }
})
