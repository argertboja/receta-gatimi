/*
** @author: Argert Boja
** @date: 18/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: Button used for header favorite
*/

// Imports
import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderButton } from 'react-navigation-header-buttons';
import Colors from '../../constants/Colors';

const CustomHeaderButton = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Icon}
            iconSize={23}
            color={Platform.OS === 'android' ? 'white' : Colors.primary}

        />
    );
}

export default CustomHeaderButton;