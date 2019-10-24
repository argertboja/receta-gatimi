/*
** @author: Argert Boja
** @date: 18/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: The screen which shows the meals from the search result
*/

// Imports
import React from 'react';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '../components/Card/Card';
import { RESULTS } from '../data/results-data';

const ResultsScreen = props => {

    const renderResults = itemData => {
        return (
            <TouchableOpacity
                style={style.screen}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'Recipe',
                        params: { recipeName: itemData.item.label }
                    });
                }}>
                <Card value={itemData.item.value} title={itemData.item.label} time={itemData.item.time} />
            </TouchableOpacity>
        );
    }

    const selectedIDs = props.navigation.getParam('selectedIDs');

    return (
        <ScrollView>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={RESULTS} renderItem={renderResults}
                numColumns={2} />
        </ScrollView>
    );
}

const style = StyleSheet.create({
    screen: {
        width: '45%',
        marginHorizontal: '2.5%',

    },
});

ResultsScreen.navigationOptions = {
    headerTitle: 'Rezultatet'
}

export default ResultsScreen;