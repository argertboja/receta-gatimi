/*
** @author: Argert Boja
** @date: 18/10/2019
** @last_update_date: 30/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: The screen which shows the receipe of a meal
*/

// Imports
import React from 'react';
import { StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/Buttons/HeaderButton';
import RecipeCard from '../components/Card/RecipeCard';
import { RESULTS } from '../data/results-data';

const ReceipeScreen = props => {

    const selectedID = props.navigation.getParam('recipeID');

    const selectedRecipe = RESULTS.find(meal => meal.id === selectedID);

    return (
        <RecipeCard
            title={selectedRecipe.label}
            value={selectedRecipe.value}
            ingredients={selectedRecipe.ingredients}
            steps={selectedRecipe.steps} />

    );
}

ReceipeScreen.navigationOptions = navigationData => {
    const title = navigationData.navigation.getParam('recipeName');

    return {
        headerTitle: title,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Te preferuara' iconName='ios-star' onPress={() => { }} />
        </HeaderButtons>
    };
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ReceipeScreen;