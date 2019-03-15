import React, {Component} from 'react'
import {Text, StyleSheet, View} from 'react-native'
import {connect} from "react-redux";
import {Content} from 'native-base';

import PrivateContainer from "../../../layouts/PrivateContainer";
import TripHeader from "../../../components/TripHeader";
import TripType from "../../../components/TripType";

class TripsIndex extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: 'round-trip'
        };
    }

    onPress = (active) => {
        this.setState({active});
    }

    render() {

        const {token} = this.props;
        const {active} = this.state;

        return (
            <PrivateContainer showTabs active="trip">

                <TripHeader title="Trips"/>

                <Content>
                    <TripType type="Round Trip" icon="refresh-ccw" iconType="Feather" active={active}
                              name="round-trip" onPress={this.onPress}/>
                    <TripType type="One Way" icon="arrow-right" iconType="Feather" active={active} name="one-way"
                              onPress={this.onPress}/>
                    <TripType type="Destination Layover" icon="refresh-ccw" iconType="Feather" active={active}
                              name="des-layer" onPress={this.onPress}/>
                    <TripType type="What this means" icon="alert-circle" iconType="Feather" active={active}
                              name="what-this-means" onPress={this.onPress}/>
                </Content>

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


