/**
 * 应用程序状态管理
 */

import {
    AsyncStorage,
    ToastAndroid,
    Alert,
    Platform
} from 'react-native'

import {
    observable,
    action
} from 'mobx'

export default class ObservableIntroStore {
    @observable userInfo = {};
    @observable isLogin = false;
    @observable themeColor = "#7db1fa"

    @action
    init = () => {
        try {
         this.userInfo.name = '黄金闪闪'
        }
    }