import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Router, Scene, Lightbox, Modal, Stack } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { AppLoading, Asset, Font } from 'expo';

import configureStore from './src/store/index';
import { Text, Image } from "react-native";

const store = configureStore()
const RouterWithRedux = connect()(Router);

// Screens
import login from "./src/screens/auth/login";
import register from "./src/screens/auth/register";
import forgotpassword from "./src/screens/auth/forgotpassword";

import homeIndex from "./src/screens/private/home/index";
import tripsIndex from "./src/screens/private/trips";
import tripsCreate from "./src/screens/private/trips/create";
import tripsDetails from "./src/screens/private/trips/details";
import tripsLoadCheck from "./src/screens/private/trips/loadcheck";
import tripsHistory from "./src/screens/private/trips/history";
import bidsIndex from "./src/screens/private/bids";
import setupIndex from "./src/screens/private/setup";
import ProfileIndex from "./src/screens/private/profile";

import DrawerContent from "./src/components/sidebar/Sidebar";

const TabIcon = ({ selected, title }) => {
    return (
        <Text style={{ color: selected ? 'red' : 'blue' }}>{title}</Text>
    );
}

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoadingComplete: false,
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require('./src/resources/images/road.jpeg'),
                require('./src/resources/images/brand/title_outlined.png'),

                require('./assets/icons/home.png'),
                require('./assets/icons/trip.png'),
                require('./assets//icons/bids.png'),
                require('./assets/icons/setup.png'),
                require('./assets/icons/left.png'),
                require('./assets/icons/right.png'),
            ]),
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                ...Ionicons.font,
                'Roboto': require('native-base/Fonts/Roboto.ttf'),
                'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            }),
        ]);
    };

    _handleLoadingError = error => {
        alert(error);
    };

    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };

    render() {

        if (!this.state.isLoadingComplete) {
            return (<AppLoading
                startAsync={this._loadResourcesAsync}
                onError={this._handleLoadingError}
                onFinish={this._handleFinishLoading}
            />);
        }

        return (
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key="root">

                        {/* Login Stack */}
                        <Stack key="auth" type="reset" hideNavBar={true}>
                            <Scene key="login" initial component={login} title="login" />
                            <Scene key="register" component={register} title="register" />
                            <Scene key="forgotpassword" component={forgotpassword} title="forgotpassword" />
                        </Stack>

                        {/* Authorized Private Stack */}
                        <Scene drawer={true} contentComponent={DrawerContent} key="private" type="reset" hideNavBar={true}>
                            <Scene key="tabs" tabs initial hideNavBar hideTabBar={true}>
                                <Scene key="home" component={homeIndex} title="home" hideNavBar icon={TabIcon} />
                                <Scene key="trips" tabs hideNavBar>
                                    <Scene key="tripsList" initial component={tripsIndex} hideNavBar hideTabBar />
                                    <Scene key="tripsCreate" component={tripsCreate} hideNavBar hideTabBar />
                                    <Scene key="tripsDetails" component={tripsDetails} hideNavBar hideTabBar />
                                    <Scene key="tripsLoadCheck" component={tripsLoadCheck} hideNavBar hideTabBar />
                                </Scene>
                                <Scene key="bids" component={bidsIndex} title="bids" hideNavBar icon={TabIcon} />
                                <Scene key="setup" component={setupIndex} title="setup" hideNavBar icon={TabIcon} />

                                <Scene key="tripsHistory" component={tripsHistory} hideNavBar />
                            </Scene>
                            <Scene key="main" hideNavBar hideTabBar>
                                <Scene key="profile" component={ProfileIndex} title="profile" hideNavBar />
                            </Scene>
                        </Scene>

                    </Scene>
                </RouterWithRedux>
            </Provider>
        );
    }
}

