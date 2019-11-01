/*
** @author: Argert Boja
** @date: 18/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: The screen which shows the filter toggles
*/

// Imports
import React, { useState } from 'react';
import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
    return (
        <View style={style.switchContainer}>
            <Text style={style.label}>{props.label}</Text>
            <Switch
                value={props.value}
                onValueChange={props.onValueChange}
                trackColor={{ true: Colors.primary }}
                thumbColor={Platform.OS === 'android' ? Colors.primary : ''} />
        </View>
    );
}

const FilterScreen = props => {

    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isDiabetic, setIsDiabetic] = useState(false);
    const [isFruit, setIsFruit] = useState(false);
    const [isSpicy, setIsSpicy] = useState(false);
    const [isSeaFood, setIsSeaFood] = useState(false);

    return (
        <View style={style.screen}>
            <Text style={style.header}>Zgjidhni llojet e ushqimeve</Text>
            <FilterSwitch
                label='Vegjetarian'
                value={isVegetarian}
                onValueChange={val => setIsVegetarian(val)} />
            <FilterSwitch
                label='Diabetike'
                value={isDiabetic}
                onValueChange={val => setIsDiabetic(val)} />
            <FilterSwitch
                label='Djegese'
                value={isSpicy}
                onValueChange={val => setIsSpicy(val)} />
            <FilterSwitch
                label='Ushqime Deti'
                value={isSeaFood}
                onValueChange={val => setIsSeaFood(val)} />
            <FilterSwitch
                label='Fruta'
                value={isFruit}
                onValueChange={val => setIsFruit(val)} />
        </View>
    );
}

FilterScreen.navigationOptions = {
    headerTitle: 'Filterat'
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    switchContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,

    },
    header: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 25
    },
    label: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default FilterScreen;