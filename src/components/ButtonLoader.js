import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button } from "native-base";
import { ActivityIndicator } from "react-native";

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
