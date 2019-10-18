/*
** @author: Argert Boja
** @date: 18/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: The screen which shows the ingredients
*/

// Imports
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const IngredientsScreen = props => {
    return (
        <View style={StyleSheet.screen}>
            <Text>
                Ingredients Screen
            </Text>
            <Button title='Go to Results' onPress={() => props.navigation.navigate({routeName: 'Results'})} />
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

export default IngredientsScreen;