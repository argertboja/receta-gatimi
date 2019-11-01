/*
** @author: Argert Boja
** @date: 18/10/2019
** @last_update_date: 29/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: This component handles the navigation of the screens
*/

// Imports
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';
// Import Screens
import IngredientsScreen from '../screens/IngredientsScreen';
import RecipeScreen from '../screens/RecipeScreen';
import ResultsScreen from '../screens/ResultsScreen';

const customDefaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary

};

const MealsNavigation = createStackNavigator({
    Ingredients: IngredientsScreen,
    Results: ResultsScreen,
    Recipe: RecipeScreen,
}, {
    defaultNavigationOptions: customDefaultNavigationOptions
});

const FavStack = createStackNavigator({
    Preferenca: FavoritesScreen,
    Receta: RecipeScreen
}, {
    defaultNavigationOptions: customDefaultNavigationOptions
});

const FilterStack = createStackNavigator({
    Filter: FilterScreen
}, {

    defaultNavigationOptions: customDefaultNavigationOptions
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
        screen: FavStack, navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-heart' size={25} color={tabInfo.tintColor} />
            }
        }
    }
}, {
    tabBarOptions:
    {
        inactiveTintColor: Platform.OS === 'android' ? Colors.primary : 'white',
        inactiveBackgroundColor: 'white',
        activeTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
        activeBackgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
    }
});

const MainNavigator = createDrawerNavigator({
    Meals: {
        screen: MealTabNavigation,
        navigationOptions: {
            drawerLabel: 'Recetat'
        }
    },
    Filters: {
        screen: FilterStack,
        navigationOptions: {
            drawerLabel: 'Filtrime'
        }
    }
}, {
    contentOptions: {
        activeTintColor: Colors.primary
    }
});

export default createAppContainer(MainNavigator);