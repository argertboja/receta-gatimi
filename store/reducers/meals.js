/*
** @author: Argert Boja
** @created_date: 03/11/2019
** @last_update_date: 03/11/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: Reducer for meal states
*/

import { RESULTS } from '../../data/results-data';

const initialState = {
    meals: RESULTS,
    filteredMeals: RESULTS,
    favoriteMeals: []
}

const mealReducer = (state = initialState, action) => {
    return state;
}

export default mealReducer;