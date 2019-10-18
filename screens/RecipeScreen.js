/*
** @author: Argert Boja
** @date: 18/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: The screen which shows the receipe of a meal
*/

// Imports
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ReceipeScreen = props => {
    return (
        <View style={StyleSheet.screen}>
            <Text>
                Receipe Screen
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ReceipeScreen;