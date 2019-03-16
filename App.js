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
import bidsIndex from "./src/screens/private/bids";
import setupIndex from "./src/screens/private/setup";

function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

function cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font));
}

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            imageLoading: true,
            isLoadingComplete: false,
        }
    }

    // async componentWillMount() {
    //     // Wait for both fonts and images
    //     await Promise.all([
    //         this._cacheResourcesAsync(),
    //     ]).catch(err => { });
    //     this.setState({ imageLoading: false });
    // }

    // async componentDidMount() {
    //     await Font.loadAsync({
    //         'Roboto': require('native-base/Fonts/Roboto.ttf'),
    //         'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    //         ...Ionicons.font,
    //     });
    //     this.setState({ loaded: true });
    // }

    // async _cacheResourcesAsync() {
    //     const images = [
    //         require('./src/resources/images/road.jpeg'),
    //         require('./src/resources/images/brand/title_outlined.png'),
    //     ];
    //     // Asset.loadAsync takes an array and this way we can load the images in parallel
    //     await Asset.loadAsync(images);
    // }


    // async _loadAssetsAsync() {
    //     const imageAssets = cacheImages([
    //         require('./src/resources/images/road.jpeg'),
    //         require('./src/resources/images/brand/title_outlined.png'),
    //     ]);

    //     // const fontAssets = cacheFonts({
    //     //     'Roboto': require('native-base/Fonts/Roboto.ttf'),
    //     //     'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    //     //     ...Ionicons.font,
    //     // });

    //     await Promise.all([...imageAssets]);
    // }

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
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
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
                        <Stack key="private" type="reset" tabs hideNavBar hideTabBar>
                            <Scene key="home" init component={homeIndex} title="home" hideNavBar />
                            <Scene key="trips" init component={tripsIndex} title="trips" hideNavBar />
                            <Scene key="bids" init component={bidsIndex} title="bids" hideNavBar />
                            <Scene key="setup" init component={setupIndex} title="setup" hideNavBar />
                        </Stack>

                    </Scene>
                </RouterWithRedux>
            </Provider>
        );
    }
}

