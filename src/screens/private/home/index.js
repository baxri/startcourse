import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from "react-redux";

import PrivateContainer from "../../../layouts/PrivateContainer";
import TripHeader from "../../../components/TripHeader";

class homeIndex extends Component {
    render() {

        const { token } = this.props;

        return (
            <PrivateContainer showTabs active="home">
                <TripHeader title="Home" />
                <Text>
                    {token}
                </Text>
                <Text>HOME</Text>
            </PrivateContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
    }
}

const styles = StyleSheet.create({})

export default connect(mapStateToProps)(homeIndex)


