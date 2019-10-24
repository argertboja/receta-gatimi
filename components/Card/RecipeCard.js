/*
** @author: Argert Boja
** @date: 24/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: Card view for Meal Recipe
*/

// Imports
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import RecipesImages from '../../data/recipes_images_data';

const RecipeCard = props => {
    return (
        <View>
            <Image source={RecipesImages[props.value]} style={styles.recipeImage} />
            <Text>
                {props.title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {

    },
    recipeImage: {
        width: '100%',
        height: 250
    }
});

export default RecipeCard;