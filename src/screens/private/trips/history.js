import React, { Component } from 'react'
import { Text, StyleSheet, View, RefreshControl, ListView, ActivityIndicator } from 'react-native'
import { connect } from "react-redux";
import { Content, List, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import PrivateContainer from "../../../layouts/PrivateContainer";
import ListItem from "../../../components/trips/ListItem";

class TripsHistory extends Component {

    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            contentLoader: true,
            loading: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ contentLoader: false });
        }, 200);
    }

    _onRefresh() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000);
    }

    render() {

        const { trips } = this.props;
        const { contentLoader } = this.state;

        return (
            <PrivateContainer showTabs={false} showBack={false} active="trip" contentLoader={contentLoader}>
                <Content refreshControl={<RefreshControl refreshing={this.state.loading} onRefresh={() => { this._onRefresh() }} />}>
                    <List
                        dataSource={this.ds.cloneWithRows(trips)}
                        renderRow={(item, secId, rowId, rowMap) => (<ListItem item={item} history={true} />)}
                        renderLeftHiddenRow={(data) => <Text></Text>}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) => <Text></Text>}
                        leftOpenValue={0}
                        rightOpenValue={0}
                    />
                </Content>
            </PrivateContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        trips: state.trips.trips,
    }
}

const styles = StyleSheet.create({

    buttonLogin: {
        marginVertical: 15,
        alignSelf: 'center',
        width: '90%',
        padding: 20,
        height: 50,
        borderWidth: 0,
        backgroundColor: '#19b5fe',
        elevation: 0,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    LoginbuttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

})

export default connect(mapStateToProps)(TripsHistory)


