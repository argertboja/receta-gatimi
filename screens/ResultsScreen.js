/*
** @author: Argert Boja
** @date: 18/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: The screen which shows the meals from the search result
*/

// Imports
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ResultsScreen = props => {

    const selectedIDs = props.navigation.getParam('selectedIDs');
    
    console.log(selectedIDs);

    return (
        <View style={StyleSheet.screen}>
            <Text>
                Results Screen
            </Text>
            <Button title='Go to recipe' onPress={() => props.navigation.navigate({routeName:'Recipe'})}/>
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

export default ResultsScreen;