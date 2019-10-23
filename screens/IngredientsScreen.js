/*
** @author: Argert Boja
** @date: 18/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: The screen which shows the ingredients
*/

// Imports
import React, { useState } from 'react';
import { Button, Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import SelectMultiple from 'react-native-select-multiple';
import Colors from '../constants/Colors';
import { INGREDIENTS } from '../data/ingredients_data';
import Icons from '../data/product_icons_data';

const IngredientsScreen = props => {

    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const ingreds = INGREDIENTS;

    onSelectionsChange = (ingredient) => {
        setSelectedIngredients(ingredient);
      }

    const renderLabel = (label, style) => {
        return (
          <View style={styles.ingredientContainer}>
            <View style={{marginLeft: 10}}>
              <Text style={styles.ingredientName}>{label}</Text>
            </View>
            <Image source={Icons[label]} />
          </View>
        )
      }
    
    return (
        <ScrollView> 
          <SelectMultiple
            items={ingreds}
            renderLabel={renderLabel}
            selectedItems={selectedIngredients}
            onSelectionsChange={onSelectionsChange} 
            checkboxSource = {require('../assets/images/icons/checkbox-unchecked.png')}
            selectedCheckboxSource = {require('../assets/images/icons/checkbox-checked.png')}/>
          <Button 
            style={styles.button}
            title='Kërko' 
            onPress={() => {props.navigation.navigate({
                routeName: 'Results', 
                params: {
                    selectedIDs : selectedIngredients
                    }
                })}
            }/>
        </ScrollView>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        flexDirection: 'row'
    }, 
    button: {
        backgroundColor: Colors.primary,
    },
    ingredientName: {
        color: Colors.primary,
        fontSize: 18,
        paddingLeft: 10,
    },
});

export default IngredientsScreen;