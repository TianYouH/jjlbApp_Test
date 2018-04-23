/**
 * Created by Rabbit on 2017/11/3.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    BackHandler,
    StatusBar,
    DeviceEventEmitter
} from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';

import Test1 from '../pages/Test1';
import Test2 from '../pages/Test2';
import Test3 from '../pages/Test3';
import Test4 from '../pages/Test4';

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        return defaultReducer(state, action);
    };
};

const getSceneStyle = () => ({
    backgroundColor: '#dfdfdf',
    // shadowOpacity: 1,
    // shadowRadius: 3,
});

const onBackPress = () => {
    console.log(Actions.state);
    if (Actions.state.index !== 0) {
        return false
    }
    Actions.pop()
    return true
}

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router createReducer={reducerCreate}
                getSceneStyle={getSceneStyle}
                backAndroidHandler={onBackPress}
            >
                <Modal
                    hideNavBar
                    transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}
                >
                    <Stack hideNavBar headerMode='screen' key="root">
                        <Tabs
                            key="tabbar"        // 唯一标识
                            wrap={true}         // 自动使用自己的导航栏包装每个场景
                            showLabel={false}   // 显示文字
                            tabBarStyle={styles.tabBarStyle} // tabBar的样式
                            swipeEnabled={false}// 是否可以滑动
                            headerMode='screen' // 页面切换方式
                            lazy={true}         // 是否默认渲染tabbar
                            tabBarPosition={'bottom'}       // tabbar在顶部还是底部，iOS默认顶部，安卓默认顶部
                            activeBackgroundColor='white'   // 选中tabbar的背景色
                            inactiveBackgroundColor='white' // 未选中tabbar的背景色
                            activeTintColor='#4ECBFC'       // 选中tabbar图标的颜色
                            inactiveTintColor='#aaa'        // 未选中tabbar图标的颜色
                        >
                            <Stack key="Test1"
                                title={'huang'}
                            >
                                <Scene component={Test1} key="Test1_key" />
                            </Stack>
                            <Stack key='Test2'
                                title='jin'
                            >
                                <Scene component={Test2} key="Test2_key" />
                            </Stack>
                            <Stack key="Test3"
                                title='我的'
                            >
                                <Scene component={Test3} key="Test3_key" />
                            </Stack>
                        </Tabs>

                        <Scene component={Test3} key="Test3_key" />
                    </Stack>

                </Modal>
            </Router>
        )
    }
}

// const App = (...props) => (
//     <Router createReducer={reducerCreate}
//         getSceneStyle={getSceneStyle}
//         backAndroidHandler={onBackPress}
//     >
//         <Modal
//             hideNavBar
//             transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}
//         >
//             <Stack hideNavBar headerMode='screen' key="root">
//                 <Tabs
//                     key="tabbar"        // 唯一标识
//                     wrap={true}         // 自动使用自己的导航栏包装每个场景
//                     showLabel={false}   // 显示文字
//                     tabBarStyle={styles.tabBarStyle} // tabBar的样式
//                     swipeEnabled={false}// 是否可以滑动
//                     headerMode='screen' // 页面切换方式
//                     lazy={true}         // 是否默认渲染tabbar
//                     tabBarPosition={'bottom'}       // tabbar在顶部还是底部，iOS默认顶部，安卓默认顶部
//                     activeBackgroundColor='white'   // 选中tabbar的背景色
//                     inactiveBackgroundColor='white' // 未选中tabbar的背景色
//                     activeTintColor='#4ECBFC'       // 选中tabbar图标的颜色
//                     inactiveTintColor='#aaa'        // 未选中tabbar图标的颜色
//                 >
//                     <Stack key="Test1"
//                         title={'huang'}
//                     >
//                         <Scene component={Test1} key="Test1_key" />
//                     </Stack>
//                     <Stack key='Test2'
//                         title='jin'
//                     >
//                         <Scene component={Test2} key="Test2_key" />
//                     </Stack>
//                     <Stack key="Test3"
//                         title='我的'
//                     >
//                         <Scene component={Test3} key="Test3_key" />
//                     </Stack>
//                 </Tabs>

//                 <Scene component={Test3} key="Test3_key" />
//             </Stack>

//         </Modal>
//     </Router>
// );

export default App;

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#eee',
        height: 49,
    },
});