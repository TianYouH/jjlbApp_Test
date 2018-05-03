import stores from '../mobx'
import {
    Platform
} from 'react-native';

import {
    TabNavigator,
    StackNavigator
} from 'react-navigation';

import { Test1 } from "../pages/t1";
import {
    Test2
} from '../pages/t2';
import {
    Test3
} from '../pages/t3';
import {
    Test4
} from '../pages/t4';

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
});

const MainScreen = StackNavigator({
    Home: {
        screen: TabScreen
    }
}, {
    initialRouteName: "TabScreen",
});

export default MainScreen;