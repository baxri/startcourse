import React, { Component } from 'react'
import { StyleSheet, View, RefreshControl, ListView, TouchableOpacity, Platform, Dimensions, Keyboard, KeyboardAvoidingView, TextInput } from 'react-native'
import { Content, List, Button, Icon, ListItem, Text, CheckBox, Radio, Body, Item, Input, DatePicker } from 'native-base';
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import PrivateContainer from "../../../layouts/PrivateContainer";
import ButtonLoader from "../../../components/ButtonLoader";

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } };
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } };

const GOOGLE_API_KEY = 'AIzaSyA2xyrDSw6pndpokaymwV2eW6d_JuT4-yo';

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

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    _keyboardDidShow = () => {

    }

    _keyboardDidHide() {
    }

    render() {

        const { leaveDate, toDate, tripType, loading } = this.state;

        return (
            <PrivateContainer showTabs active="trip" showBack={true}>

                <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}
                    ref="flatList1"

                >

                    <View style={styles.choosetype}>
                        <View style={styles.header}>
                            <Text style={{ color: '#6c7a89' }}>Choose Trip Type</Text>
                        </View>

                        <View style={styles.body}>
                            <TouchableOpacity style={Platform.OS == 'android' ? styles.triptypeAndroid : styles.triptypeIos}>
                                <ListItem style={styles.listitem} onPress={() => this.chooseTripType(1)}>
                                    <Radio selected={tripType === 1} style={Platform.OS == "android" ? styles.checkbox : styles.checkboxIos} />
                                    <Body>
                                        <Text>Round Trip</Text>
                                    </Body>
                                </ListItem>
                            </TouchableOpacity>
                            <TouchableOpacity style={Platform.OS == 'android' ? styles.triptypeAndroid : styles.triptypeIos}>

                                <ListItem style={styles.listitem} onPress={() => this.chooseTripType(2)}>
                                    <Radio selected={tripType === 2} style={Platform.OS == "android" ? styles.checkbox : styles.checkboxIos} />
                                    <Body>
                                        <Text>One Way Trip to Destination</Text>
                                    </Body>
                                </ListItem>
                            </TouchableOpacity>
                            <TouchableOpacity style={Platform.OS == 'android' ? styles.triptypeAndroid : styles.triptypeIos}>
                                <ListItem style={styles.listitem} onPress={() => this.chooseTripType(3)}>
                                    <Radio selected={tripType === 3} style={Platform.OS == "android" ? styles.checkbox : styles.checkboxIos} />
                                    <Body>
                                        <Text>One Way Trip from Home</Text>
                                    </Body>
                                </ListItem>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.formContainer}>

                        <KeyboardAvoidingView>

                            <Item style={styles.inputItem}>
                                <GooglePlacesAutocomplete
                                    styles={{
                                        textInputContainer: {
                                            backgroundColor: '#fff',
                                            borderTopWidth: 0,
                                            borderBottomWidth: 0,
                                        },
                                        textInput: {
                                            marginLeft: 0,
                                            marginRight: 0,
                                            height: 38,
                                            color: '#5d5d5d',
                                            fontSize: 18,
                                        },
                                    }}

                                    placeholder='From'
                                    minLength={2} // minimum length of text to search
                                    autoFocus={false}
                                    // returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                                    keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
                                    listViewDisplayed='false'    // true/false/undefined
                                    fetchDetails={true}
                                    renderDescription={row => row.description} // custom description render
                                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                                        console.log(data, details);
                                    }}

                                    getDefaultValue={() => ''}

                                    query={{
                                        // available options: https://developers.google.com/places/web-service/autocomplete
                                        key: GOOGLE_API_KEY,
                                        language: 'en', // language of the results
                                        types: '(cities)' // default: 'geocode'
                                    }}

                                    // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                                    // currentLocationLabel="Current location"
                                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                                    GoogleReverseGeocodingQuery={{
                                        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                                    }}
                                    GooglePlacesSearchQuery={{
                                        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                                        rankby: 'distance',
                                        type: 'cafe'
                                    }}

                                    GooglePlacesDetailsQuery={{
                                        // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                                        fields: 'formatted_address',
                                    }}

                                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                                    // predefinedPlaces={[homePlace, workPlace]}
                                    debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                                // renderLeftButton={() => <Text>LEFT</Text>}
                                // renderRightButton={() => <Text>Custom text after the input</Text>}
                                />

                                <Icon name='home' type="AntDesign" />
                            </Item>
                            <Item style={styles.inputItem}>
                                <GooglePlacesAutocomplete
                                    styles={{
                                        textInputContainer: {
                                            backgroundColor: '#fff',
                                            borderTopWidth: 0,
                                            borderBottomWidth: 0,
                                        },
                                        textInput: {
                                            marginLeft: 0,
                                            marginRight: 0,
                                            height: 38,
                                            color: '#5d5d5d',
                                            fontSize: 18,
                                        },
                                    }}

                                    placeholder='To'
                                    minLength={2} // minimum length of text to search
                                    autoFocus={false}
                                    // returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                                    keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
                                    listViewDisplayed='false'     // true/false/undefined
                                    fetchDetails={true}
                                    renderDescription={row => row.description} // custom description render
                                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                                        console.log(data, details);
                                    }}

                                    getDefaultValue={() => ''}

                                    query={{
                                        // available options: https://developers.google.com/places/web-service/autocomplete
                                        key: GOOGLE_API_KEY,
                                        language: 'en', // language of the results
                                        types: '(cities)' // default: 'geocode'
                                    }}

                                    // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                                    // currentLocationLabel="Current location"
                                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                                    GoogleReverseGeocodingQuery={{
                                        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                                    }}
                                    GooglePlacesSearchQuery={{
                                        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                                        rankby: 'distance',
                                        type: 'cafe'
                                    }}

                                    GooglePlacesDetailsQuery={{
                                        // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                                        fields: 'formatted_address',
                                    }}

                                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                                    // predefinedPlaces={[homePlace, workPlace]}
                                    debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                                // renderLeftButton={() => <Text>LEFT</Text>}
                                // renderRightButton={() => <Text>Custom text after the input</Text>}
                                />
                                <Icon name='map-pin' type="Feather" style={styles.locationIconPin} />
                            </Item>

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
                        </KeyboardAvoidingView>


                    </View>


                </KeyboardAwareScrollView>
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
        marginLeft: 20,
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
    checkboxIos: { width: 10,  },

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
        color: "#bdc3c7",
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


