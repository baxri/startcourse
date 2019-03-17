import React, { Component } from 'react'
import { Text, StyleSheet, View, RefreshControl, ListView } from 'react-native'
import { connect } from "react-redux";
import { Content, List, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';


import PrivateContainer from "../../../layouts/PrivateContainer";
import ListItem from "../../../components/trips/ListItem";

class TripsIndex extends Component {

    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            loading: false,
        }

    }

    _onRefresh() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000);
    }

    render() {

        const { trips } = this.props;

        return (
            <PrivateContainer showTabs active="trip">
                <Content refreshControl={<RefreshControl refreshing={this.state.loading} onRefresh={() => { this._onRefresh() }} />}>

                    <List
                        dataSource={this.ds.cloneWithRows(trips)}
                        renderRow={(item, secId, rowId, rowMap) => (<ListItem item={item} />)}
                        renderLeftHiddenRow={(data) => <Text></Text>}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) => <Text></Text>}
                        leftOpenValue={0}
                        rightOpenValue={0}
                    />

                </Content>
                <Button style={styles.buttonLogin} onPress={() => Actions.tripsCreate()}>
                    <Text style={styles.LoginbuttonText}>Create New Trip</Text>
                </Button>
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
        height: 50,
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

export default connect(mapStateToProps)(TripsIndex)


