/*
** @author: Argert Boja
** @created_date: 12/11/2019
** @last_update_date: 12/11/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: Actions of meal states
*/

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, mealId: id };
};