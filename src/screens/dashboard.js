import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from "react-redux";

class dashboard extends Component {
    render() {

        const { token } = this.props;

        return (
            <View>
                <Text>
                    {token}
                </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
    }
}

const styles = StyleSheet.create({})

export default connect(mapStateToProps)(dashboard)


