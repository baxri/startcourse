import {Font} from 'expo';
import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import {Router, Scene, Lightbox, Modal} from 'react-native-router-flux';
import {connect, Provider} from 'react-redux';

import configureStore from './src/store/index';
import {Text} from "react-native";

const store = configureStore()
const RouterWithRedux = connect()(Router);

// Screens
import login from "./src/screens/auth/login";
import register from "./src/screens/auth/register";
import forgotpassword from "./src/screens/auth/forgotpassword";
import dashboard from "./src/screens/dashboard";
import Error from "./src/components/modals/Error";

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({loading: false});
    }

    render() {

        if (this.state.loading) {
            return (<Text></Text>);
        }

        return (
            <Provider store={store}>
                <RouterWithRedux>
                        <Lightbox>
                            <Scene key="root">

                                {/* Login Stack */}
                                <Scene key="auth" type="reset" hideNavBar={true}>
                                    <Scene key="login" initial component={login} title="login"/>
                                    <Scene key="register" component={register} title="register"/>
                                    <Scene key="forgotpassword" component={forgotpassword} title="forgotpassword"/>
                                </Scene>

                                {/* Authorized Private Stack */}
                                <Scene key="private" type="reset" hideNavBar={true}>
                                    <Scene key="dashboard" init component={dashboard} title="dashboard"/>
                                </Scene>

                            </Scene>

                            <Scene key="error" component={Error} />
                        </Lightbox>


                </RouterWithRedux>
            </Provider>
        );
    }
}

