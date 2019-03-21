import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native'
import { Text, Thumbnail, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';


export default class Sidebar extends Component {

    render() {

        const { closeDrawer } = this.props;

        let Image_Http_URL = { uri: 'https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2017/02/Avatar-Sizes-Custom-1.png' };

        return (
            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Thumbnail style={styles.image} source={Image_Http_URL} />
                    <Text style={styles.header}>Ruslan Sliz</Text>
                </View>
                <View style={styles.menuContainer}>
                    <Button iconLeft transparent style={styles.menuItems} onPress={() => Actions.private()}>
                        <Icon name='home' type="AntDesign" style={styles.menuItems} />
                        <Text uppercase={false} style={styles.menuItemsText}>Home</Text>
                    </Button>
                    <Button iconLeft transparent style={styles.menuItems} onPress={() => { Actions.main(); }}>
                        <Icon name='user' type="SimpleLineIcons" style={styles.menuItemsIcon} />
                        <Text uppercase={false} style={styles.menuItemsText}>Profile</Text>
                    </Button>
                    <Button iconLeft transparent style={styles.menuItems} onPress={() => { Actions.tripsHistory(); }}>
                        <Icon name='settings' type="SimpleLineIcons" style={styles.menuItemsIcon} />
                        <Text uppercase={false} style={styles.menuItemsText}>History</Text>
                    </Button>
                    <Button iconLeft transparent style={styles.menuItems}>
                        <Icon name='help-circle' type="Feather" style={styles.menuItemsIcon} />
                        <Text uppercase={false} style={styles.menuItemsText}>Help</Text>
                    </Button>
                    <Button iconLeft transparent style={styles.menuItems} onPress={() => Actions.auth()}>
                        <Icon name='logout' type="AntDesign" style={styles.menuItemsIcon} />
                        <Text uppercase={false} style={styles.menuItemsText}>Log out</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },


    avatarContainer: {
        flex: 0.3,
        flexDirection: 'row',
        alignItems: 'center',
    },

    menuContainer: {
        flex: 0.7,
    },

    image: {
        marginLeft: 30,
        marginRight: 15,
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    header: {
        fontSize: 20,
        fontStyle: 'italic',
    },

    menuItems: {
        marginVertical: 10,
    },

    menuItemsIcon: {
        color: '#2e3131',
        fontSize: 25,
        width: 30,
    },

    menuItemsText: {
        color: '#2e3131',
        fontSize: 20,
    },

    menuItemsIconActive: {
        color: '#19b5fe',
        fontSize: 25,
        width: 30,
    },

    menuItemsTextActive: {
        color: '#19b5fe',
        fontSize: 20,
    },
})
