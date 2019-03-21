import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import { Button, Icon, ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default function ListViewItem({ item, history }) {
    return (
        <ListItem style={history ? styles.listitemHistory : styles.listitem}>
            <View style={[history ? styles.headerHistory : styles.header, (history ? { backgroundColor: item.color } : {})]} >
                <Text style={[history ? { color: '#fff' } : { color: '#6c7a89' }]}>March 15 {history ? " - Shipemnt name" : ""}</Text>
            </View>
            <View style={styles.body}>

                <View style={styles.location}>
                    <View style={styles.iconContaniner}>
                        <Icon name='home' type="FontAwesome" style={styles.locationIconHome} />
                    </View>
                    <View style={styles.textContaniner}>
                        <Text style={styles.locationTexts}>{item.home}</Text>
                        <Text style={styles.locationTexts}>{item.from}</Text>
                    </View>
                </View>
                <View style={styles.location}>
                    <View style={styles.iconContaniner}>
                        <Icon name='pin' type="Entypo" style={styles.locationIconPin} />
                    </View>
                    <View style={styles.textContaniner}>
                        <Text style={styles.locationTexts}>{item.to}</Text>
                        <Text style={styles.locationTexts}>{item.dest}</Text>
                    </View>
                </View>
                <View style={styles.status}>
                    <View style={styles.statusLeft}>
                        <Text style={styles.label}>Status</Text>
                        <Text style={styles.locationTexts}>{item.status}</Text>
                    </View>
                    <View style={styles.statusRight}>
                        <Text style={styles.label}>From - to</Text>
                        <Text style={styles.locationTexts}>{item.dates}</Text>
                    </View>
                </View>

                {!history && <View style={styles.details}>
                    <Button primary iconRight style={styles.detailsButton} onPress={() => Actions.tripsDetails()}>
                        <Text>Details</Text>
                        <Icon name='arrow-forward' />
                    </Button>
                </View>}

            </View>
        </ListItem >

    )
}

const styles = StyleSheet.create({

    iconContaniner: {
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textContaniner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    location: {
        flex: 0.33,
        flexDirection: 'row',
        borderColor: '#e8e8e8'
    },

    locationTexts: {
        alignSelf: 'flex-start',
        color: '#2e3131',
        fontSize: (Platform.OS == 'ios' ? 14 : 15),
    },

    locationIconHome: {
        fontSize: 40,
        color: '#19b5fe',
    },

    locationIconPin: {
        fontSize: 40,
        color: '#d5b8ff',
    },

    status: {
        // borderWidth: 1,
        flexDirection: 'row',
        flex: 0.33,
        borderColor: '#e8e8e8'
    },

    details: {
        // borderWidth: 1,
        flexDirection: 'row',
        flex: 0.33,
        borderColor: '#e8e8e8',
        justifyContent: 'flex-end',

    },

    detailsButton: {
        marginRight: 10,
        marginTop: 10,
        backgroundColor: '#19b5fe',
        elevation: 0,
        borderRadius: 5,
        height: 40,
    },

    statusLeft: {
        paddingLeft: 30,
        flex: 0.4,
        // borderWidth: 1,
    },

    statusRight: {
        flex: 0.6,
        // borderWidth: 1,
    },

    label: {
        fontSize: 13,
        alignSelf: 'flex-start',
        marginBottom: 10,
        color: 'lightgray',
    },

    listitem: {
        elevation: 1,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'column',
        height: 290,

        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        marginBottom: 15,

        paddingRight: -20,
        paddingTop: -15,
        paddingBottom: -15,
    },

    listitemHistory: {
        elevation: 1,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'column',
        height: 240,

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
        paddingLeft: 15,
    },

    headerHistory: {
        flexDirection: 'row',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%',
        height: 40,
        backgroundColor: '#e8e8e8',
        paddingLeft: 15,
    },

    body: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: '100%',
        flex: 1,
        borderWidth: 1, // For IOS
        borderColor: '#e8e8e8',
        padding: 0,
        backgroundColor: '#fff',
    },

})
