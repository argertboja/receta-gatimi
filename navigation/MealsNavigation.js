/*
** @author: Argert Boja
** @date: 18/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: This component handles the navigation of the screens
*/

// Imports
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
// Import Screens
import IngredientsScreen from '../screens/IngredientsScreen'
import RecipeScreen from '../screens/RecipeScreen'
import ResultScreen from '../screens/ResultsScreen'


const MealsNavigation = createStackNavigator({
    Ingredients: IngredientsScreen,
    Results: ResultScreen,
    Recipe: RecipeScreen,
});

export default createAppContainer(MealsNavigation);