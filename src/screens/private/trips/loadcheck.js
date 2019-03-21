import React, { Component } from 'react'
import { StyleSheet, View, RefreshControl, ListView, TouchableOpacity, Platform, Dimensions, Image } from 'react-native'
import { Content, List, Button, Icon, ListItem, Text, CheckBox, Body, Item, Input, DatePicker } from 'native-base';
import { connect } from "react-redux";
import { MapView } from 'expo';
import Carousel from 'react-native-snap-carousel';

import PrivateContainer from "../../../layouts/PrivateContainer";
import ButtonLoader from "../../../components/ButtonLoader";


class TripsLoadCheck extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        };

        this._carousel = {};
        this.init();
    }

    init() {
        this.state = {
            videos: [
                {
                    id: "WpIAc9by5iU",
                    thumbnail: "https://burza.com.hr/static/oglasi/motocikle-kupujem-162607.jpg",
                    title: "Led Zeppelin - Stairway To Heaven",
                    length: '6 ft 10 in',
                    weight: '2 ft 6 in',
                    width: '3 ft 9 in',
                    height: '425 lbs',

                },
                {
                    id: "sNPnbI1arSE",
                    thumbnail: "https://automania.hr/wp-content/uploads/2015/02/harley__clanak-prva.jpg",
                    title: "Eminem - My Name Is",
                    length: '6 ft 10 in',
                    weight: '2 ft 6 in',
                    width: '3 ft 9 in',
                    height: '425 lbs',
                },
                {
                    id: "VOgFZfRVaww",
                    thumbnail: "http://www.ntv.ba/wp-content/uploads/2016/07/motocikl3.jpg",
                    title: "",
                    length: '6 ft 10 in',
                    weight: '2 ft 6 in',
                    width: '3 ft 9 in',
                    height: '425 lbs',
                },
                {
                    id: "VOgFZfRVawfgw",
                    thumbnail: "https://www.avto-magazin.si/media/cache/upload/Photo/2014/05/15/explorer-1200-11_biggalleryimage.jpg",
                    title: "",
                    length: '6 ft 10 in',
                    weight: '2 ft 6 in',
                    width: '3 ft 9 in',
                    height: '425 lbs',
                },
                {
                    id: "VOgFZfRVdawfgw",
                    thumbnail: "https://img.halooglasi.com/slike/oglasi/Thumbs/150601/l/dizalica-za-motocikle-radni-sto-3826029-6153669.jpg",
                    title: "",
                    length: '6 ft 10 in',
                    weight: '2 ft 6 in',
                    width: '3 ft 9 in',
                    height: '425 lbs',
                },
                {
                    id: "VOgFZfRVfgdawfgw",
                    thumbnail: "https://autoblog.rs/gallery/108/Suzuki%20GSX-S%20750%20A.jpg",
                    title: "",
                    length: '6 ft 10 in',
                    weight: '2 ft 6 in',
                    width: '3 ft 9 in',
                    height: '425 lbs',
                }
            ]
        };
    }

    render() {

        const { loading, videos } = this.state;

        return (
            <PrivateContainer showTabs active="trip" showBack={true}>
                <Content>

                    <View style={styles.titleContainer}>
                        <Text style={styles.titleContainerText}>Delivery Segment 1</Text>
                    </View>

                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsRowText}>Load Type: 14 Loads, Mostely</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsRowText}>Weight: 13844lbs / 20000 lb cap</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsRowText}>Item: 1 God, 2 Parcels in Cab</Text>
                    </View>

                    {videos.map((item, key) => (<View style={styles.card} key={key}>
                        <View style={styles.cardLeft}>
                            <Image style={{ width: '100%', height: 160, borderRadius: 10, marginTop: 10, }} source={{ uri: item.thumbnail }} />
                            <ButtonLoader
                                loading={false}
                                style={styles.buttonRemove}
                                textStyle={styles.buttonTextRemove} title="Delete" />
                        </View>
                        <View style={styles.cardRight}>
                            <Text style={styles.label}>length</Text>
                            <Text style={styles.value}>{item.length}</Text>

                            <Text style={styles.label}>Weight</Text>
                            <Text style={styles.value}>{item.weight}</Text>

                            <Text style={styles.label}>Width</Text>
                            <Text style={styles.value}>{item.width}</Text>

                            <Text style={styles.label}>height</Text>
                            <Text style={styles.value}>{item.height}</Text>
                        </View>
                    </View>))}


                </Content>
                <ButtonLoader
                    loading={loading}
                    onPress={this.next}
                    style={styles.button}
                    textStyle={styles.buttonText} title="Create" />
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

    card: {
        flex: 1,
        flexDirection: 'row',
        height: 250,
        borderWidth: 0.2,
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 15,
        padding: 10,
    },

    cardLeft: {
        flex: 2,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },

    cardRight: {
        flex: 1,
        paddingLeft: 30,
    },

    label: {
        color: '#bdc3c7',
        marginTop: 10,
        fontSize: 13,
    },

    value: {
        color: '#2e3131',
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
        width: '50%',
        height: 40,
        padding: 10,
        borderWidth: 0,
        backgroundColor: '#d64541',
        elevation: 0,
        borderRadius: 10,
        alignSelf: 'flex-start',
    },

    button: {
        marginVertical: 15,
        alignSelf: 'center',
        width: '90%',
        height: 50,
        padding: 20,
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

    buttonTextRemove: {
        color: 'white',
        fontSize: 15,
        alignSelf: 'center',
    },
})

export default connect(mapStateToProps)(TripsLoadCheck)


