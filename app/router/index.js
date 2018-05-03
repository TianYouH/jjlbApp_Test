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
    animationEnabled: true, //改变标签时是否进行动画
    tabBarPosition: 'bottom', //标签栏的位置，可选'top'或'bottom'。
    swipeEnabled: false, //是否允许在标签之间滑动
    tabBarOptions: {
        showIcon: true, //是否显示标签图标。
        activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff', //活动选项卡的标签图标颜色
        inactiveTintColor: '#dfdfdf', //非活动选项卡的标签图标颜色
        style: {
            backgroundColor: stores.appstore.themeColor
        }
    }
}));

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
    componentDidMount() {}
    componentWillUnmount() {}
    render() {
        return ( < Provider { ...stores } >
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