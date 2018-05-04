import { AppRegistry } from 'react-native';

import './app/common/global';

import App from './app/index';

console.ignoredYellowBox = [
    'Warning: isMounted(...) is deprecated'
];

AppRegistry.registerComponent('jjlbApp', () => App);
