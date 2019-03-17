import React, { Component } from 'react'
import { StyleSheet, View, RefreshControl, ListView, TouchableOpacity, Platform, Dimensions } from 'react-native'
import { Content, List, Button, Icon, ListItem, Text, CheckBox, Body, Item, Input, DatePicker } from 'native-base';
import { connect } from "react-redux";

import PrivateContainer from "../../../layouts/PrivateContainer";
import ButtonLoader from "../../../components/ButtonLoader";

class TripsCreate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tripType: 1,
            fromDate: '',
            toDate: '',
            from: '',
            to: '',

            loading: false,
        };
    }

    handleChange = (name, value) => {
        this.setState({ [name]: value });
    }

    chooseTripType = (tripType) => {
        this.setState({ tripType });
    }

    setFromDate = (date) => {
        this.setState({ fromDate: date });
    }

    setToDate = (date) => {
        this.setState({ toDate: date });
    }

    next = () => {

    }


    render() {

        const { fromDate, toDate, tripType, loading } = this.state;

        return (
            <PrivateContainer showTabs active="trip" showBack={true}>
                <Content>

                    <View style={styles.choosetype}>
                        <View style={styles.header}>
                            <Text style={{ color: '#6c7a89' }}>Choose Trip Type</Text>
                        </View>

                        <View style={styles.body}>
                            <TouchableOpacity style={Platform.OS == 'android' ? styles.triptypeAndroid : styles.triptypeIos}>
                                <ListItem style={styles.listitem} onPress={() => this.chooseTripType(1)}>
                                    <CheckBox checked={tripType === 1} style={Platform.OS == "android" ? styles.checkbox : {}} />
                                    <Body>
                                        <Text>Round Trip</Text>
                                    </Body>
                                </ListItem>
                            </TouchableOpacity>
                            <TouchableOpacity style={Platform.OS == 'android' ? styles.triptypeAndroid : styles.triptypeIos}>

                                <ListItem style={styles.listitem} onPress={() => this.chooseTripType(2)}>
                                    <CheckBox checked={tripType === 2} style={Platform.OS == "android" ? styles.checkbox : {}} />
                                    <Body>
                                        <Text>One Way Trip to Destination</Text>
                                    </Body>
                                </ListItem>
                            </TouchableOpacity>
                            <TouchableOpacity style={Platform.OS == 'android' ? styles.triptypeAndroid : styles.triptypeIos}>
                                <ListItem style={styles.listitem} onPress={() => this.chooseTripType(3)}>
                                    <CheckBox checked={tripType === 3} style={Platform.OS == "android" ? styles.checkbox : {}} />
                                    <Body>
                                        <Text>One Way Trip from Home</Text>
                                    </Body>
                                </ListItem>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.formContainer}>

                        <Item style={styles.inputItemDate}>
                            <DatePicker
                                locale={"en"}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Leave Date"
                                textStyle={styles.datePlaceholder}
                                placeHolderTextStyle={styles.datePlaceholder}
                                onDateChange={this.setFromDate}
                                disabled={false}
                            />
                            <Icon name='calendar' type="SimpleLineIcons" />
                        </Item>
                        <Item style={styles.inputItemDate}>
                            <DatePicker
                                locale={"en"}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Return Date"
                                textStyle={styles.datePlaceholder}
                                placeHolderTextStyle={styles.datePlaceholder}
                                onDateChange={this.setToDate}
                                disabled={false}
                            />
                            <Icon name='calendar' type="SimpleLineIcons" />
                        </Item>
                        <Item style={styles.inputItem}>
                            <Input placeholder='From' style={styles.input} onChangeText={(val) => this.handleChange('from', val)} />
                            <Icon name='home' type="AntDesign" />
                        </Item>
                        <Item style={styles.inputItem}>
                            <Input placeholder='To' style={styles.input} onChangeText={(val) => this.handleChange('to', val)} />
                            <Icon name='map-pin' type="Feather" style={styles.locationIconPin} />
                        </Item>
                    </View>


                </Content>
                <ButtonLoader
                    loading={loading}
                    onPress={this.next}
                    style={styles.button}
                    textStyle={styles.buttonText} title="Next" />
            </PrivateContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
    }
}

const styles = StyleSheet.create({

    choosetype: {
        elevation: 1,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'column',
        height: 230,

        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        marginBottom: 15,

        paddingRight: -20,
        paddingTop: -15,
        paddingBottom: -15,
    },

    header: {
        flexDirection: 'row',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%',
        height: 50,
        backgroundColor: '#e8e8e8',
        alignItems: 'center',
        paddingLeft: 15,
    },

    body: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: '100%',
        flex: 1,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        padding: 0,
        backgroundColor: '#fff',
    },

    triptypeAndroid: {
        flex: 1,
        borderColor: '#e8e8e8',
        justifyContent: 'center',
        marginLeft: 15,
    },

    triptypeIos: {
        flex: 1,
        borderColor: '#e8e8e8',
        justifyContent: 'center',
    },

    listitem: {
        borderBottomColor: '#fff'
    },

    checkbox: { marginLeft: -25 },


    formContainer: {
        paddingHorizontal: 30,
        flex: 1,
        alignItems: 'center',
    },

    inputItemDate: {
        paddingVertical: 10,
        borderBottomColor: '#2e3131',
        paddingLeft: 4,
    },

    inputItem: {
        paddingVertical: 5,
        borderBottomColor: '#2e3131',
        paddingLeft: 4,
    },

    input: {
        fontSize: 17,
    },

    datePlaceholder: {
        color: "#2e3131",
        width: (Dimensions.get('window').width - 95),
        fontSize: 17,
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

export default connect(mapStateToProps)(TripsCreate)


