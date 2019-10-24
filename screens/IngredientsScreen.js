/*
** @author: Argert Boja
** @date: 18/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: The screen which shows the ingredients
*/

// Imports
import React, { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import SelectMultiple from 'react-native-select-multiple';
// Import data
import Colors from '../constants/Colors';
import { INGREDIENTS } from '../data/ingredients_data';
import Icons from '../data/product_icons_data';


const IngredientsScreen = props => {

    // State for saving the selected ingredients
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    // Receiving ingredient data from local files
    const ingreds = INGREDIENTS;

    // Changing selected ingredients array on click on checkbox
    onSelectionsChange = (ingredient) => {
        setSelectedIngredients(ingredient);
    }

    // Rendering list items (ingredients)
    const renderLabel = (label, style) => {
        return (
            <View style={styles.ingredientContainer}>
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.ingredientName}>{label}</Text>
                </View>
                <Image source={Icons[label]} />
            </View>
        )
    }

    // Main view which displays igredients
    return (
        <ScrollView>
            <SelectMultiple
                items={ingreds}
                renderLabel={renderLabel}
                selectedItems={selectedIngredients}
                onSelectionsChange={onSelectionsChange}
                checkboxSource={require('../assets/images/icons/checkbox-unchecked.png')}
                selectedCheckboxSource={require('../assets/images/icons/checkbox-checked.png')} />

            {/* Button for going to next screen and sending selected ingredients*/}
            <Button
                style={styles.button}
                title='Kërko'
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'Results',
                        params: {
                            selectedIDs: selectedIngredients
                        }
                    })
                }
                }
            />
        </ScrollView>
    );
}

// Navigation of screens
IngredientsScreen.navigationOptions = {
    headerTitle: 'Përbërësit'
}

// Styling
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