/*
** @author: Argert Boja
** @date: 18/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: Main Component of the App
*/

// Imports
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import MealsNavigation from './navigation/MealsNavigation';
import { mealReducer } from './store/reducers/meals';


const mainReducer = combineReducers({
    meals: mealReducer
});

const store = createStore(mainReducer)


const fetchFonts = () => {
    Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'open-sans-extra-bold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
    });
};

export default function App() {

    //enableScreens();

    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
    }

    return (
        <Provider store={store}><MealsNavigation /></Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
