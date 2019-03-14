import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Router, Scene, Lightbox, Modal } from 'react-native-router-flux';
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
import dashboard from "./src/screens/dashboard";
import Error from "./src/components/modals/Error";


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

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({ loaded: true });
    }

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
                require('./src/resources/images/icons/home.png'),
                require('./src/resources/images/icons/trip.png'),
                require('./src/resources/images/icons/bids.png'),
                require('./src/resources/images/icons/setup.png'),
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

        if (!this.state.loaded) {
            return (<Text></Text>);
        }

        return (
            <Provider store={store}>
                <RouterWithRedux>
                    <Lightbox>
                        <Scene key="root">

                            {/* Login Stack */}
                            <Scene key="auth" type="reset" hideNavBar={true}>
                                <Scene key="login" initial component={login} title="login" />
                                <Scene key="register" component={register} title="register" />
                                <Scene key="forgotpassword" component={forgotpassword} title="forgotpassword" />
                            </Scene>

                            {/* Authorized Private Stack */}
                            <Scene key="private" type="reset" hideNavBar={true}>
                                <Scene key="dashboard" init component={dashboard} title="dashboard" />
                            </Scene>

                        </Scene>

                        <Scene key="error" component={Error} />
                    </Lightbox>


                </RouterWithRedux>
            </Provider>
        );
    }
}

