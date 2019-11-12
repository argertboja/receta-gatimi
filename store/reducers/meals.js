/*
** @author: Argert Boja
** @created_date: 03/11/2019
** @last_update_date: 03/11/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: Reducer for meal states
*/

import { RESULTS } from '../../data/results-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
    meals: RESULTS,
    filteredMeals: RESULTS,
    favoriteMeals: []
}

const mealReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if (existingIndex >= 0) {
                console.log("found")
                const oldFav = [...state.favoriteMeals];
                oldFav.splice(existingIndex, 1);
                return { ...state, favoriteMeals: oldFav };
            } else {
                console.log("not found")
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
            }
        default:
            return state;
    }
}

export default mealReducer;