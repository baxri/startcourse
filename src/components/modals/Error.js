import React, {Component} from 'react'
import {StyleSheet, View, Text} from "react-native";

class Error extends Component {
    render() {

        const {message} = this.props;

        return (
            <View style={styles.errorContainer}>
                <Text>Error Modal</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    errorContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: 'red',
    },
});


export default Error;
