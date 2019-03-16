import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, KeyboardAvoidingView } from 'react-native'
import { Container, Drawer } from "native-base";
import FlashMessage, { showMessage } from "react-native-flash-message";

import Header from "../components/Header";
import FooterTabs from "../components/auth/FooterTabs";
import SideBar from "../components/sidebar/Sidebar";

export default class PrivateContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dimesions: { width, height } = Dimensions.get('window'),
        }
    }

    closeDrawer = () => {
        this.drawer._root.close()
    };

    openDrawer = () => {
        this.drawer._root.open()
    };

    _onLayout(e) {
        this.setState({ dimesions: { width, height } = Dimensions.get('window') })
    }

    render() {

        const { children, showTabs, active, disableHeader } = this.props;

        return (
            <Drawer ref={(ref) => { this.drawer = ref; }} content={<SideBar closeDrawer={this.closeDrawer} />} onClose={() => this.closeDrawer()} >
                <FlashMessage position="top" />
                <Container style={styles.container} onLayout={this._onLayout.bind(this)}>
                    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                        {!disableHeader && <Header openDrawer={this.openDrawer} />}
                        {children}
                    </KeyboardAvoidingView>
                    {showTabs == true && <FooterTabs active={active} />}
                </Container >
            </Drawer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
})
