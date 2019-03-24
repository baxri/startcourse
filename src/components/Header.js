import React from 'react';
import { Icon, Text } from 'native-base';
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Actions, Drawer } from "react-native-router-flux";
import Ripple from 'react-native-material-ripple';


function Header({ title, openDrawer, showBack }) {
    return (
        <View style={styles.header}>

            {!showBack && <Ripple rippleOpacity={0.1} style={styles.headerButton} onPress={() => { Actions.drawerOpen() }}>
                <Icon name="menu" type="Feather" style={{ color: '#19b5fe' }} />
            </Ripple>}

            {showBack && <Ripple rippleOpacity={0.1} style={styles.headerButton} onPress={() => Actions.pop()}>
                <Icon name="arrowleft" type="AntDesign" style={{ color: '#19b5fe' }} />
            </Ripple>}

            <View style={{ flexDirection: 'row', borderWidth: 0, alignItems: 'center' }}>
                <Icon name="star" type="FontAwesome" style={{ color: '#19b5fe', marginRight: 5, }} />
                <Text style={[styles.text, { color: '#19b5fe' }]}>Star</Text><Text style={styles.text}>Course</Text>
            </View>

            <Ripple onPress={() => Actions.auth()} rippleOpacity={0.1} style={styles.headerButton}>
                <Icon name="logout" type="AntDesign" style={{ color: '#19b5fe' }} />
            </Ripple>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({

    headerButton: {
        borderWidth: 0,
        height: 50,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        borderWidth: 0,
        marginTop: 33,
        // paddingTop: 40,
        // paddingBottom: 10,
        // paddingHorizontal: 15,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.2,
        borderBottomColor: '#bdc3c7',
        backgroundColor: 'white',
        // elevation: 1,
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
})
