import React, {
    PureComponent
} from 'react';
import PropTypes from 'prop-types'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const TYPES = {
    fontawesome: FontAwesome,
    ionicons: Ionicons,
    entypo: Entypo,
    evilIcons: EvilIcons,
    feather: Feather,
    foundation: Foundation,
    materialicons: MaterialIcons,
    materialcommunityicons: MaterialCommunityIcons,
    octicons: Octicons,
    zocial: Zocial,
    simplelineicons: SimpleLineIcons
};

export default class Icons extends PureComponent {
    static propTypes = {
        source: PropTypes.string
    }

    render(){
        const { source = 'ionicons', ...others } = this.props;
        const Icon = TYPES[source.toLowerCase()];
        return (
            <Icon  {...others} />        
        )
    }
}