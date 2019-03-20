import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from "react-redux";
import CalendarPicker from 'react-native-calendar-picker';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import PrivateContainer from "../../../layouts/PrivateContainer";

class homeIndex extends Component {

    constructor(props) {
        super(props)

        this.state = {
            contentLoader: true,
            selectedStartDate: null,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ contentLoader: false });
        }, 200);
    }

    onDateChange = (date) => {
        this.setState({
            selectedStartDate: date,
        });
    }

    render() {

        const { token } = this.props;

        const { selectedStartDate, contentLoader } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';

        const toDay = new Date().toISOString().split('T');

        console.log(toDay)

        let activeToday = {

        };

        activeToday[toDay[0]] = { selected: true, color: '#19b5fe', textColor: '#fff' };

        return (
            <PrivateContainer showTabs active="home" contentLoader={contentLoader}>
                <Calendar

                    // markingType={'custom'}
                    // Collection of dates that have to be colored in a special way. Default = {}
                    markedDates={
                        {
                            ...activeToday,
                            '2019-03-02': { startingDay: true, color: '#bdc3c7', textColor: 'white' },
                            '2019-03-03': { selected: true, color: '#bdc3c7', textColor: 'white' },
                            '2019-03-04': { selected: true, color: '#bdc3c7', textColor: 'white' },
                            '2019-03-05': { selected: true, color: '#bdc3c7', textColor: 'white', endingDay: true, },

                            '2019-03-12': { startingDay: true, color: '#bdc3c7', textColor: 'white' },
                            '2019-03-13': { endingDay: true, color: '#bdc3c7', textColor: 'white' },

                            '2019-03-22': { startingDay: true, color: '#c8f7c5', textColor: 'white' },
                            '2019-03-23': { selected: true, color: '#c8f7c5', textColor: 'white' },
                            '2019-03-24': { selected: true, color: '#c8f7c5', textColor: 'white' },
                            '2019-03-25': { selected: true, color: '#c8f7c5', textColor: 'white' },
                            '2019-03-26': { selected: true, color: '#c8f7c5', textColor: 'white', endingDay: true, },

                            '2019-03-28': { startingDay: true, color: '#f5e653', textColor: 'white' },
                            '2019-03-29': { selected: true, color: '#f5e653', textColor: 'white' },
                            '2019-03-30': { selected: true, color: '#f5e653', textColor: 'white' },
                            '2019-03-31': { selected: true, color: '#f5e653', textColor: 'white' },
                            '2019-04-01': { selected: true, color: '#f5e653', textColor: 'white', endingDay: true, },
                        }}
                    // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
                    markingType={'period'}
                    onDayPress={(day) => { alert(day.dateString) }}
                />

                <View style={[styles.detailsContainer, { marginTop: 5, }]}>
                    <Text style={styles.detailsText}>Upcomming trip strating March 22!</Text>
                </View>

                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsText}>Bid accepted for trip March 28 - April 1</Text>
                </View>

            </PrivateContainer >
        )
    }
}

const styles = StyleSheet.create({
    detailsContainer: {
        flex: 0.5,
        borderTopWidth: 1,
        borderColor: '#bdc3c7',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },

    detailsText: {
        color: '#6c7a89',
    }
})

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
    }
}

export default connect(mapStateToProps)(homeIndex)


