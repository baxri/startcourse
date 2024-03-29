import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from "react-redux";

import PrivateContainer from "../../../layouts/PrivateContainer";

class bidsIndex extends Component {
    render() {

        const { token } = this.props;

        return (
            <PrivateContainer showTabs active="bids">
                <Text>
                    {token}
                </Text>
                <Text>BIDS</Text>
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

export default connect(mapStateToProps)(bidsIndex)


