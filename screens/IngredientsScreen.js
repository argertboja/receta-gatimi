/*
** @author: Argert Boja
** @date: 18/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: The screen which shows the ingredients
*/

// Imports
import React, { useState } from 'react';
import { Button, FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors';
import { INGREDIENTS } from '../data/ingredients_data';

const IngredientsScreen = props => {

    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const addIngredientHandler = (ingredient) => {
        if (selectedIngredients.includes(ingredient)) { 
        console.log('exists');
            setSelectedIngredients(currentIngredients => {return currentIngredients.filter(id => id !== ingredient)})} else {
            console.log(selectedIngredients);
        setSelectedIngredients(prev => [...prev, ingredient]);}
    }

    const renderIngredient = (itemData) => {
        return (
            <View>
            <TouchableOpacity 
                style={styles.ingredientContainer} 
                onPress={() =>  addIngredientHandler(itemData.item.id)
                }
                > 
                <View >
                    <Text>
                        {itemData.item.name}
                    </Text>
                </View>                
            </TouchableOpacity>
            </View>
        );
    }
    
    return (
        <View>
        <FlatList keyExtractor={(item, index) => item.id} data={INGREDIENTS} renderItem={renderIngredient} />
        <Text>{selectedIngredients.includes(3)}</Text>
        <Button 
            title='Kërko' 
            onPress={() => {props.navigation.navigate({
                routeName: 'Results', 
                params: {
                    selectedIDs : selectedIngredients
                    }
                })}
            }/>
        
        </View>
    );
}

IngredientsScreen.navigationOptions = {
    headerTitle: 'Përbërësit',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
}

const styles = StyleSheet.create({
    ingredientContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        padding: 5,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5
    }
});

export default IngredientsScreen;