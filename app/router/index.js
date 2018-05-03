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
import stores from '../mobx'
import {
    StyleSheet,
    Text,
    View,
    BackHandler,
    StatusBar,
    DeviceEventEmitter
} from 'react-native';

import {
    TabNavigation
} from 'react-navigation';

import {
    Test1
} from '../pages/t1';
import {
    Test2
} from '../pages/t2';
import {
    Test3
} from '../pages/t3';
import {
    Test4
} from '../pages/t4';

const TabScreen = observer(TabNavigator({
    T1: {
        screen: Test1,
        title: '首页',
        path: 'T1'
    },
    T2: {
        screen: Test2,
        title: '首页2',
        path: 'T2'
    },
    T3: {
        screen: Test3,
        title: '首页3',
        path: 'T3'
    },
    T4: {
        screen: Test4,
        title: '个人中心',
        path: 'T4',

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
}));

const MainScreen = StackNavigator({
    'Home': {
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
        stores.appstore.init(this).then(() => {
            console.log('初始化完成')
        })
    }
    componentDidMount() {}
    componentWillUnmount() {}
    render() {
        return ( <Provider { ...stores } >
                    < MainScreen />
                </Provider>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
});

export default App