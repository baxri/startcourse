import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import { Button } from "native-base";

export default class ButtonLoader extends Component {
    render() {

        const { onPress, style, textStyle, title, loading } = this.props;

        return (
            <Button primary block style={style} onPress={onPress}>
                {!loading && <Text style={textStyle}>{title}</Text>}
                {loading && <ActivityIndicator size="small" color="#fff" />}
            </Button>
        )
    }
}

const styles = StyleSheet.create({})
