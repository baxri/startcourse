import React, { Component } from 'react'
import { StyleSheet, View, RefreshControl, ListView, TouchableOpacity, Platform, Dimensions } from 'react-native'
import { Content, List, Button, Icon, ListItem, Text, CheckBox, Body, Item, Input, DatePicker } from 'native-base';
import { connect } from "react-redux";
import { MapView } from 'expo';

import PrivateContainer from "../../../layouts/PrivateContainer";
import ButtonLoader from "../../../components/ButtonLoader";

class TripsDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        };
    }

    render() {

        const { loading } = this.state;

        return (
            <PrivateContainer showTabs active="trip" showBack={true}>
                <Content>

                    <MapView
                        style={{ flex: 1, height: 300, }}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />

                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsRowText}>Expected Rate: 3.52/ml</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsRowText}>Est. Distance: 132300 miles</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsRowText}>Load Type: 14 Loads Mostly</Text>
                    </View>

                    <View style={styles.titleContainer}>
                        <Text style={styles.titleContainerText}>1976 BMW R90/6</Text>
                    </View>

                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsRowText}>Expected Rate: 3.52/ml</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsRowText}>Est. Distance: 132300 miles</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsRowText}>Load Type: 14 Loads Mostly</Text>
                    </View>

                    <View style={styles.actionContainer}>
                        <View style={styles.actionContainerLeft}>
                            <TouchableOpacity style={styles.minus}>
                                <Text style={{ color: '#6c7a89' }}>-</Text>
                            </TouchableOpacity>
                            <View style={styles.value}>
                                <Text style={{ color: '#6c7a89', fontWeight: 'bold', }}>$400</Text>
                            </View>
                            <TouchableOpacity style={styles.plus}>
                                <Text style={{ color: '#6c7a89' }}>+</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.actionContainerRight}>
                            <ButtonLoader
                                loading={loading}
                                onPress={this.next}
                                style={styles.buttonRemove}
                                textStyle={styles.buttonText} title="Remove" />
                        </View>
                    </View>

                </Content>
                <ButtonLoader
                    loading={loading}
                    onPress={this.next}
                    style={styles.button}
                    textStyle={styles.buttonText} title="Next" />
            </PrivateContainer >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
    }
}

const styles = StyleSheet.create({

    actionContainer: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 6,
        marginTop: 15,
    },

    actionContainerLeft: {
        flex: 1,
        flexDirection: 'row',
    },

    actionContainerRight: {
        flex: 1,
        justifyContent: 'center',

    },

    minus: {
        flex: 0.3,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#6c7a89',
    },
    value: {
        flex: 0.4,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: 10,
        borderColor: '#6c7a89',
    },
    plus: {
        flex: 0.3,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#6c7a89',
    },

    detailsRow: {
        flex: 1,
        height: 70,
        borderRadius: 10,
        backgroundColor: '#eeeeee',
        justifyContent: 'center',
        marginHorizontal: 15,
        marginTop: 15,
        paddingLeft: 15,
    },

    detailsRowText: {
        color: '#6c7a89',
    },

    titleContainer: {
        justifyContent: 'center',
        marginHorizontal: 15,
        marginTop: 15,
    },

    titleContainerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    buttonRemove: {
        alignSelf: 'center',
        width: '90%',
        height: 50,
        padding: 20,
        height: 50,
        borderWidth: 0,
        backgroundColor: '#d64541',
        elevation: 0,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
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

    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
})

export default connect(mapStateToProps)(TripsDetails)


