import React, {Component} from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import {Content, Item, Input, Icon, Button, Text} from 'native-base';

import TripForm from "./TripForm";

export default class TripType extends Component {
    render() {

        const {type, icon, iconType, active, name, onPress} = this.props;

        const isActive = name == active;

        return (
            <View style={styles.tripContainer}>
                <TouchableOpacity onPress={() => onPress(name)}>
                    <View style={[styles.trip, (isActive ? styles.activeTrip : {})]}>
                        <Text style={styles.text}> {type} </Text>
                        <Icon style={styles.icon} active name={icon} type={iconType}/>
                    </View>
                </TouchableOpacity>
                {isActive && <View>
                    <TripForm />
                </View>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    trip: {
        height: 60,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#e8e8e8',
        borderBottomColor: '#6c7a89',
        // borderBottomWidth: 1,
        borderRadius: 3,
    },

    activeTrip: {
        borderBottomColor: '#6c7a89',
        borderBottomWidth: 1,
        borderRadius: 3,
    },

    text: {
        fontSize: 20,
    },

    icon: {
        color: '#6c7a89',
    },

    tripContainer: {
        marginHorizontal: 10,
        paddingBottom: 15,
    }
})
