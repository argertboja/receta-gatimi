/*
** @author: Argert Boja
** @date: 18/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: The screen which shows the meals marked as favorite
*/

// Imports
import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import HeaderButton from '../components/Buttons/HeaderButton';
import ResultListView from '../components/Lists/ResultsListView';

const FavoritesScreen = props => {
    const availableMeals = useSelector(state => state.meals.favoriteMeals);

    return (
        <ResultListView navigation={props.navigation} numCol={1} meals={availableMeals} />
    );
}

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Të Preferuara',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='Menu'
                iconName='ios-menu'
                onPress={() => { navData.navigation.toggleDrawer() }}>

            </Item>
        </HeaderButtons>
    };
}

export default FavoritesScreen;