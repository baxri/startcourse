import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from "react-redux";
import CalendarPicker from 'react-native-calendar-picker';

import PrivateContainer from "../../../layouts/PrivateContainer";
import TripHeader from "../../../components/TripHeader";

class homeIndex extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedStartDate: null,
        }
    }


    onDateChange = (date) => {
        this.setState({
            selectedStartDate: date,
        });
    }

    render() {

        const { token } = this.props;

        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';

        const success = {
            style: {
                backgroundColor: "#c8f7c5",
                borderRadius: 0,
                flex: 1,
                width: '100%',
            },
            containerStyle: {
                borderRadius: 0,
                backgroundColor: "#c8f7c5",
                borderWidth: 1,
                borderColor: 'white',
                // margin: 1,
            }
        };

        const note = {
            style: {
                backgroundColor: "#ffec8b",
            },
            containerStyle: {
                borderRadius: 0,
                backgroundColor: "#ffec8b",
                borderWidth: 1,
                borderColor: 'white',
            }
        };

        const today = {
            style: {
                backgroundColor: "#2574a9",
            },
            containerStyle: {
                borderRadius: 0,
                backgroundColor: "#2574a9",
                borderWidth: 1,
                borderColor: 'white',
            }
        };

        const gray = {
            style: {
                backgroundColor: "#ececec",
            },
            containerStyle: {
                borderRadius: 0,
                backgroundColor: "#ececec",
                borderWidth: 1,
                borderColor: 'white',
            }
        };

        const events = [
            dateStyle = {
                date: "2019-03-03",
                ...gray
            },
            dateStyle = {
                date: "2019-03-04",
                ...gray
            },
            dateStyle = {
                date: "2019-03-05",
                ...gray
            },
            dateStyle = {
                date: "2019-03-06",
                ...gray
            },
            dateStyle = {
                date: "2019-03-07",
                ...gray
            },
            dateStyle = {
                date: "2019-03-19",
                ...success
            },
            dateStyle = {
                date: "2019-03-20",
                ...success
            },
            dateStyle = {
                date: "2019-03-21",
                ...success
            },
            dateStyle = {
                date: "2019-03-27",
                ...note
            },
            dateStyle = {
                date: "2019-03-28",
                ...note
            },
            dateStyle = {
                date: "2019-03-29",
                ...note
            },

            dateStyle = {
                date: "2019-03-16",
                ...today
            },

        ]
        const disabledDates = ['2019-03-28', '2019-03-29'];
        return (
            <PrivateContainer showTabs active="home">
                <TripHeader title="Home" />

                <View style={styles.container}>
                    <CalendarPicker
                        customDatesStyles={events}
                        onDateChange={this.onDateChange}
                        selectedDayStyle={{
                            backgroundColor: null,
                            borderWidth: 2,
                            borderRadius: 0,
                            flex: 1,
                            width: '100%',
                        }}
                        disabledDates={disabledDates}
                        textStyle={{

                        }}
                    />

                    <View>
                        <Text>SELECTED DATE:{startDate}</Text>
                    </View>
                </View>


            </PrivateContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
    }
}

const styles = StyleSheet.create({})

export default connect(mapStateToProps)(homeIndex)


