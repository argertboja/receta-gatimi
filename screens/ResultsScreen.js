/*
** @author: Argert Boja
** @date: 18/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: The screen which shows the meals from the search result
*/

// Imports
import React from 'react';
import { StyleSheet } from 'react-native';
import ResultListView from '../components/Lists/ResultsListView';

const ResultsScreen = props => {

    const selectedIDs = props.navigation.getParam('selectedIDarray');
    console.log(selectedIDs);

    return (
        <ResultListView navigation={props.navigation} numCol={2} />
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