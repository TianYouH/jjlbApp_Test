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

import MainScreen from './router/router';

@observer
export default class App extends Component {

    componentWillMount() {
        stores.appstore.init()
    }

    render() {
        return ( 
            <Provider {...stores}>
                <MainScreen />
            </Provider> 
        )
    }
}
