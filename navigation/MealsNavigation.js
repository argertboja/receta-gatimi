/*
** @author: Argert Boja
** @date: 18/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: This component handles the navigation of the screens
*/

// Imports
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Colors from '../constants/Colors'
// Import Screens
import IngredientsScreen from '../screens/IngredientsScreen'
import RecipeScreen from '../screens/RecipeScreen'
import ResultsScreen from '../screens/ResultsScreen'


const MealsNavigation = createStackNavigator({
    Ingredients: IngredientsScreen,
    Results: ResultsScreen,
    Recipe: RecipeScreen,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});

export default createAppContainer(MealsNavigation);