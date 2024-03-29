import React, { Component } from 'react'
import { StyleSheet, View, RefreshControl, ListView, TouchableOpacity, Platform, Dimensions, Image } from 'react-native'
import { Content, List, Button, Icon, ListItem, Text, CheckBox, Body, Item, Input, DatePicker } from 'native-base';
import { connect } from "react-redux";
import { MapView } from 'expo';
import Carousel from 'react-native-snap-carousel';

import PrivateContainer from "../../../layouts/PrivateContainer";
import ButtonLoader from "../../../components/ButtonLoader";
import { Actions } from 'react-native-router-flux';


class TripsDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contentLoader: true,
            loading: false,
            videos: [
                {
                    id: "WpIAc9by5iU",
                    thumbnail: "https://burza.com.hr/static/oglasi/motocikle-kupujem-162607.jpg",
                    title: "Led Zeppelin - Stairway To Heaven"
                },
                {
                    id: "sNPnbI1arSE",
                    thumbnail: "https://automania.hr/wp-content/uploads/2015/02/harley__clanak-prva.jpg",
                    title: "Eminem - My Name Is"
                },
                {
                    id: "VOgFZfRVaww",
                    thumbnail: "http://www.ntv.ba/wp-content/uploads/2016/07/motocikl3.jpg",
                    title: ""
                },
                {
                    id: "VOgFZfRVawfgw",
                    thumbnail: "https://www.avto-magazin.si/media/cache/upload/Photo/2014/05/15/explorer-1200-11_biggalleryimage.jpg",
                    title: ""
                },
                {
                    id: "VOgFZfRVdawfgw",
                    thumbnail: "https://img.halooglasi.com/slike/oglasi/Thumbs/150601/l/dizalica-za-motocikle-radni-sto-3826029-6153669.jpg",
                    title: ""
                },
                {
                    id: "VOgFZfRVfgdawfgw",
                    thumbnail: "https://autoblog.rs/gallery/108/Suzuki%20GSX-S%20750%20A.jpg",
                    title: ""
                }
            ]
        };

        this._carousel = {};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ contentLoader: false });
        }, 200);
    }

    handleSnapToItem(index) {

    }

    loadCheck = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            Actions.tripsLoadCheck();
            this.setState({ loading: false });
        }, 300);

    }

    _renderItem = ({ item, index }) => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', width: 256, height: 200, }}>
                <View
                    onPress={() => {
                        console.log("clicked to index", index)
                        this._carousel.snapToItem(index);
                    }}>

                    <Image style={{ width: 256, height: 160, borderRadius: 10 }}
                        source={{ uri: item.thumbnail }} />
                </View>
            </View>
        );
    }

    render() {

        const { loading, contentLoader } = this.state;

        return (
            <PrivateContainer showTabs active="trip" showBack={true} contentLoader={contentLoader}>
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

                    <Carousel
                        ref={(c) => {
                            this._carousel = c;
                        }}
                        data={this.state.videos}
                        renderItem={this._renderItem.bind(this)}
                        onSnapToItem={this.handleSnapToItem.bind(this)}
                        sliderWidth={360}
                        itemWidth={256}
                        layout={'default'}
                        firstItem={0}
                    />

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
                                loading={false}
                                onPress={this.next}
                                style={styles.buttonRemove}
                                textStyle={styles.buttonText} title="Remove" />
                        </View>
                    </View>

                </Content>
                <ButtonLoader
                    onPress={this.loadCheck}
                    loading={loading}
                    // onPress={this.next}
                    style={styles.button}
                    textStyle={styles.buttonText} title="Load Check" />
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


