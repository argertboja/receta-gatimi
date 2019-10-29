/*
** @author: Argert Boja
** @date: 18/10/2019
** @last_update_date: 29/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: The screen which shows the meals from the search result
*/

// Imports
import React from 'react';
import ResultListView from '../components/Lists/ResultsListView';

const ResultsScreen = props => {

    const selectedIDs = props.navigation.getParam('selectedIDarray');
    console.log(selectedIDs);

    return (
        <ResultListView navigation={props.navigation} numCol={2} />
    );
}

ResultsScreen.navigationOptions = {
    headerTitle: 'Rezultatet'
}

export default ResultsScreen;