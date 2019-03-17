import React, { Component } from 'react'
import { StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native'
import { Container, Drawer } from "native-base";
import FlashMessage from "react-native-flash-message";

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
        const { children, showTabs, showBack, active, disableHeader } = this.props;

        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar closeDrawer={this.closeDrawer} />}
                onClose={() => this.closeDrawer()}
            >
                <Container style={styles.container} onLayout={this._onLayout.bind(this)}>
                    {!disableHeader && <Header openDrawer={this.openDrawer} showBack={showBack} />}
                    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                        {children}
                    </KeyboardAvoidingView>
                    {showTabs == true && <FooterTabs active={active} />}
                </Container >
                <FlashMessage position="top" />
            </Drawer>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
})
