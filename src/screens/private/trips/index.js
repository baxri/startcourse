import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from "react-redux";

import PrivateContainer from "../../../layouts/PrivateContainer";
import TripHeader from "../../../components/TripHeader";
import TripType from "../../../components/TripType";

class TripsIndex extends Component {
    render() {

        const { token } = this.props;

        return (
            <PrivateContainer showTabs active="trip">

                <TripHeader title="Trips" />

                <TripType type="Round Trip" icon="refresh-ccw" iconType="Feather" />
                <TripType type="One Way" icon="arrow-right" iconType="Feather" />
                <TripType type="Destination Layover" icon="refresh-ccw" iconType="Feather" />
                <TripType type="What this means" icon="alert-circle" iconType="Feather" />


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

export default connect(mapStateToProps)(TripsIndex)


