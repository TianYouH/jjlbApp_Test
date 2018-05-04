/**
 * Created by Rabbit on 2017/11/3.
 */

import React, {
    Component
} from 'react';
import {
    observer,
    Provider
} from 'mobx-react/native'
import stores from './mobx'
import {
    StyleSheet,
    Platform,
} from 'react-native';

import MainScreen from './router/index';

@observer
export default class App extends Component {

    componentWillMount() {
        stores.appstore.init()
    }

    navOnChange = (...data) => {
        console.log()
        console.log(this.navigation)
    }

    render() {
        return ( 
            <Provider {...stores}>
                <MainScreen 
                    ref = {nav => this.navigation = nav}
                    onNavigationStateChange={() => this.navOnChange()} />
            </Provider>
        )
    }
}
