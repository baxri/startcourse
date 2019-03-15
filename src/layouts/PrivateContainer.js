import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, KeyboardAvoidingView } from 'react-native'
import { Container, Content } from "native-base";
import FlashMessage, { showMessage } from "react-native-flash-message";

import FooterTabs from "../components/auth/FooterTabs";

export default class PrivateContainer extends Component {

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

        const { children, showTabs, active } = this.props;

        return (
            <Container style={styles.container} onLayout={this._onLayout.bind(this)}>
                <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                    {children}
                </KeyboardAvoidingView>
                <FlashMessage position="top" />
                {showTabs == true && <FooterTabs active={active} />}
            </Container >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
})
