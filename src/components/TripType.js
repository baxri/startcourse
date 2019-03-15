import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Content, Item, Input, Icon, Button, Text } from 'native-base';

export default class TripType extends Component {
    render() {

        const { type, icon, iconType } = this.props;

        return (
            <View style={styles.tripContainer} >
                <TouchableOpacity>
                    <View style={styles.trip}>
                        <Text style={styles.text}> {type} </Text>
                        <Icon style={styles.icon} active name={icon} type={iconType} />
                    </View>
                </TouchableOpacity>
            </View >
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

    text: {
        fontSize: 20,
    },

    icon: {
        color: '#6c7a89',
    },

    tripContainer: {
        marginHorizontal: 10,
    }
})
