import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from "react-redux";

import PrivateContainer from "../../../layouts/PrivateContainer";
import TripHeader from "../../../components/TripHeader";

class setupIndex extends Component {
    render() {

        const { token } = this.props;

        return (
            <PrivateContainer showTabs active="setup">
                <TripHeader title="Setup" />
                <Text>
                    {token}
                </Text>
                <Text>SETUP</Text>
            </PrivateContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
    }
}

const styles = StyleSheet.create({})

export default connect(mapStateToProps)(setupIndex)


