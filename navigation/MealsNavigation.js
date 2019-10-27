/*
** @author: Argert Boja
** @date: 18/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: This component handles the navigation of the screens
*/

// Imports
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
// Import Screens
import IngredientsScreen from '../screens/IngredientsScreen';
import RecipeScreen from '../screens/RecipeScreen';
import ResultsScreen from '../screens/ResultsScreen';

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

const MealTabNavigation = createBottomTabNavigator({
    'Perberesit': {
        screen: MealsNavigation,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            }
        }
    },
    'Te preferuara': {
        screen: FavoritesScreen, navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            }
        }
    }
}
    , {
        tabBarOptions:
        {
            inactiveTintColor: Colors.primary,
            inactiveBackgroundColor: 'white',
            activeTintColor: 'white',
            activeBackgroundColor: Colors.primary
        }
    });

export default createAppContainer(MealTabNavigation);