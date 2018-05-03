/**
 * Created by Rabbit on 2017/11/3.
 */

import React, {
    Component
} from 'react';
import {
    observer,
    Provider,
    inject
} from 'mobx-react/native'
import {
    StyleSheet,
    Platform,
    Text,
    View,
    BackHandler,
    StatusBar,
    DeviceEventEmitter
} from 'react-native';

import {
    TabNavigator,
    StackNavigator
} from 'react-navigation';

import stores from './mobx'
import Test1 from './pages/t1/test1';
import Test2 from './pages/t2/test2';
import Test3 from './pages/t3/test3';
import Test4 from './pages/t4/test4';

const TabScreen = TabNavigator({
    T1: {
        screen: Test1,
        path: 'T1'
    },
    T2: {
        screen: Test2,
        path: 'T2'
    },
    T3: {
        screen: Test3,
        path: 'T3'
    },
    T4: {
        screen: Test4,
        path: 'T4'
    }
}, {
    animationEnabled: true,
    tabBarPosition: 'bottom',
    headerMode: 'screen',
    swipeEnabled: false,
    tabBarOptions: {
        showIcon: true,
        activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
        inactiveTintColor: '#dfdfdf',
        indicatorStyle: {
            opacity: 0
        },
        labelStyle: {
            fontSize: 10
        },
        style: {
            height: 50,
            backgroundColor: stores.appstore.themeColor
        }
    }
});

const MainScreen = StackNavigator({
    Home: {
        screen: TabScreen
    }
}, {
    headerMode: 'screen',
});

@observer
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }

    }
    componentWillMount() {
        stores.appstore.init()
    }
    render() {
        return ( < Provider { ...stores } >
                    < MainScreen />
                </Provider>
            )
    }
}

export default App