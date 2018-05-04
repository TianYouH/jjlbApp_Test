
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export class Huang extends Component {

    //导航栏数据配置
    static  navigationOptions = {
        title: '黄',
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>恍恍恍</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});