
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Test1 extends Component {

    //导航栏数据配置
    static  navigationOptions = {
        header: null,
        tabBarLabel: "首页1"
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>点我</Text>
                <FontAwesome.Button name="facebook" backgroundColor="#3b5998" >
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>你好世界</Text>
                </FontAwesome.Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});