import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

export default class ContentLoader extends Component {
    render() {
        return (<ActivityIndicator size="large" style={styles.loader} color="#dadfe1" />)
    }
}

const styles = StyleSheet.create({
    loader: {
        marginTop: 100,
    }
})
