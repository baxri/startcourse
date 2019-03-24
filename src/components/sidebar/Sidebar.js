import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import { Text, Thumbnail, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from "react-redux";
import Ripple from 'react-native-material-ripple';

class Sidebar extends Component {

    render() {

        const { closeDrawer, role } = this.props;

        let Image_Http_URL = { uri: 'https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2017/02/Avatar-Sizes-Custom-1.png' };

        
        return (
            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Thumbnail style={styles.image} source={Image_Http_URL} />
                    <View>
                        <Text style={styles.header}>Ruslan Sliz</Text>
                        <Text style={styles.role}>{role}</Text>
                    </View>
                </View>
                <View style={styles.menuContainer}>
                    <Ripple rippleOpacity={0.1} onPress={() => Actions.private()}>
                        <Button iconLeft transparent style={styles.menuItems} >
                            <Icon name='home' type="SimpleLineIcons" style={styles.menuItemsIcon} />
                            <Text uppercase={false} style={styles.menuItemsText}>Home</Text>
                        </Button>
                    </Ripple>
                    <Ripple rippleOpacity={0.1} onPress={() => { Actions.main(); }}>
                        <Button iconLeft transparent style={styles.menuItems} >
                            <Icon name='user' type="SimpleLineIcons" style={styles.menuItemsIcon} />
                            <Text uppercase={false} style={styles.menuItemsText}>Profile</Text>
                        </Button>
                    </Ripple>
                    <Ripple rippleOpacity={0.1} onPress={() => { Actions.tripsHistory(); }}>
                        <Button iconLeft transparent style={styles.menuItems} >
                            <Icon name='ios-timer' type="Ionicons" style={styles.menuItemsIcon} />
                            <Text uppercase={false} style={styles.menuItemsText}>History</Text>
                        </Button>
                    </Ripple>
                    <Ripple rippleOpacity={0.1}>
                        <Button iconLeft transparent style={styles.menuItems}>
                            <Icon name='help-circle' type="Feather" style={styles.menuItemsIcon} />
                            <Text uppercase={false} style={styles.menuItemsText}>Help</Text>
                        </Button>
                    </Ripple>
                    <Ripple rippleOpacity={0.1} onPress={() => Actions.auth()}>
                        <Button iconLeft transparent style={styles.menuItems} >
                            <Icon name='logout' type="AntDesign" style={styles.menuItemsIcon} />
                            <Text uppercase={false} style={styles.menuItemsText}>Log out</Text>
                        </Button>
                    </Ripple>
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
        // borderBottomWidth: 0.2,
        backgroundColor: '#eeeeee',
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
        borderWidth: 2,
        borderColor: '#fff',
    },

    header: {
        fontSize: 20,
        fontStyle: 'italic',
    },

    role: {
        fontSize: 11,
        fontStyle: 'italic',
        color: '#2ecc71'
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

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        role: state.auth.role,
    }
}

export default connect(mapStateToProps)(Sidebar)
