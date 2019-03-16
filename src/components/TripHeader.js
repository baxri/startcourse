import React from 'react';
import { Icon, Text } from 'native-base';
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Actions } from "react-native-router-flux";

function TripHeader({ title }) {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.text, { color: '#19b5fe' }]}>Star</Text><Text style={styles.text}>Course</Text>
            </View>

            <TouchableOpacity onPress={() => Actions.auth()}>
                <Icon name="logout" type="AntDesign" style={{ color: '#19b5fe' }} />
            </TouchableOpacity>
        </View>
    )
}

export default TripHeader;

const styles = StyleSheet.create({
    header: {
        paddingTop: 40,
        paddingBottom: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#bdc3c7',
        backgroundColor: 'white',
        elevation: 1,
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
})
