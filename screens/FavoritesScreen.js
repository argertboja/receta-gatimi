/*
** @author: Argert Boja
** @date: 18/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: The screen which shows the meals marked as favorite
*/

// Imports
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavoritesScreen = props => {
    return (
        <View style={StyleSheet.screen}>
            <Text>
                Favorites Screen
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

export default FavoritesScreen;