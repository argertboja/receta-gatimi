/*
** @author: Argert Boja
** @date: 18/10/2019
** @last_update_date: 30/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: The screen which shows the receipe of a meal
*/

// Imports
import React, { useCallback, useEffect } from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import HeaderButton from '../components/Buttons/HeaderButton';
import RecipeCard from '../components/Card/RecipeCard';
import { toggleFavorite } from '../store/actions/meals';

const ReceipeScreen = props => {

    const selectedID = props.navigation.getParam('recipeID');
    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const selectedRecipe = availableMeals.find(meal => meal.id === selectedID);

    const dispatch = useDispatch();

    const favoriteToggleHandler = useCallback(() => {
        dispatch(toggleFavorite(selectedID));
    }, [dispatch, selectedID]);

    useEffect(() => {
        props.navigation.setParams({ toggleFav: favoriteToggleHandler });
    }, [favoriteToggleHandler]);

    return (
        <RecipeCard
            title={selectedRecipe.label}
            value={selectedRecipe.value}
            ingredients={selectedRecipe.ingredients}
            quantities={selectedRecipe.quantities}
            steps={selectedRecipe.steps}
            id={selectedRecipe.id}
            time={selectedRecipe.time} />

    );
}

ReceipeScreen.navigationOptions = navigationData => {
    const title = navigationData.navigation.getParam('recipeName');
    const toggleFavorites = navigationData.navigation.getParam('toggleFav');

    return {
        headerTitle: title,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Te preferuara' iconName='ios-heart-empty' onPress={toggleFavorites} />
        </HeaderButtons>
    };
}

export default ReceipeScreen;