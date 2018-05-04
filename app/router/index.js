import {
    Platform
} from 'react-native';

import {
    TabNavigator,
    StackNavigator,
    NavigationActions
} from 'react-navigation';

import {
    Test1
} from "../pages/t1";
import {
    Test2
} from '../pages/t2';
import {
    Test3
} from '../pages/t3';
import {
    Test4
} from '../pages/t4';
import {
    Huang
} from "../pages/other";
import {
    RouteConfigs,
    TabNavigatorConfig,
    StackNavigatorConfig
} from "../common/config";


const TabScreen = TabNavigator({
        T1: {
            screen: Test1,
            path: 'T1',
            navigationOptions: props => {
                return RouteConfigs({
                    iconame: "ios-home",
                    label: '首页',
                    props,
                })
            }
        },
        T2: {
            screen: Test2,
            path: 'T2',
            navigationOptions: props => {
                return RouteConfigs({
                    iconame: "ios-planet",
                    label: '首页2',
                    props,
                })
            }
        },
        T3: {
            screen: Test3,
            path: 'T3',
            navigationOptions: props => {
                return RouteConfigs({
                    iconame: "ios-analytics",
                    label: '首页3',
                    props,
                })
            }
        },
        T4: {
            screen: Test4,
            path: 'T4',
            navigationOptions: props => {
                return RouteConfigs({
                    iconame: "ios-contacts",
                    label: '首页4',
                    props,
                })
            }
        }
    },
    TabNavigatorConfig({
        initialRouteName: "T1",
    })
);

const MainScreen = StackNavigator({
        Home: {
            screen: TabScreen
        },
        Huang: {
            screen: Huang,
        }
    },
    StackNavigatorConfig({
        initialRouteName: 'Home'
    })
);

const navigateOnce = (getStateForAction) => (action, state) => {
    const {
        type,
        routeName
    } = action;
    console.log(state)
    return (
        state &&
        type === NavigationActions.NAVIGATE &&
        routeName !== 'Home' &&
        routeName === state.routes[state.routes.length - 1].routeName
    ) ? null : getStateForAction(action, state);
};

MainScreen.router.getStateForAction = navigateOnce(MainScreen.router.getStateForAction);

export default MainScreen;