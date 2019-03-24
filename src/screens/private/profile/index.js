import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { connect } from "react-redux";
import { Text, Thumbnail, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import PrivateContainer from "../../../layouts/PrivateContainer";

class ProfileIndex extends Component {
    render() {

        const { token } = this.props;

        let Image_Http_URL = { uri: 'https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2017/02/Avatar-Sizes-Custom-1.png' };

        return (
            <PrivateContainer showTabs={false} active="bids" disableHeader={true}>
                <View style={styles.avatarContainer}>
                    <Button iconLeft transparent style={styles.backButton} onPress={() => Actions.pop()}>
                        <Icon name='ios-arrow-round-back' type="Ionicons" style={styles.backButtonText} />
                    </Button>
                    <Thumbnail style={styles.image} source={Image_Http_URL} />
                    <Text style={styles.header}>Ruslan Sliz</Text>
                </View>
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
    avatarContainer: {
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        paddingTop: 30,
        paddingBottom: 30,
    },

    image: {
        marginLeft: 15,
        marginRight: 15,
        width: 110,
        height: 110,
        borderRadius: 50,
    },

    header: {
        marginTop: 18,
        fontSize: 22,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },

    backButton: {
        height: 80,
    },

    backButtonText: {
        fontSize: 50,
        color: '#2e3131',
        marginLeft: 27,
    },
})

export default connect(mapStateToProps)(ProfileIndex)


