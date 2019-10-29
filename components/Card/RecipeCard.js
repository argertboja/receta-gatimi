/*
** @author: Argert Boja
** @date: 24/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: Card view for Meal Recipe
*/

// Imports
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import RecipesImages from '../../data/recipes_images_data';

const RecipeCard = props => {
    return (
        <ScrollView style={styles.cardContainer}>
            <Image source={RecipesImages[props.value]} style={styles.recipeImage} />
            <View style={styles.mealDetail}>
                <Text>
                    {props.id}
                </Text>
                <Text>
                    {props.time}
                </Text>
            </View>
            <Text>Përberesit</Text>
            <View>
                {props.ingredients.map(ingredient => <Text key={ingredient}>{ingredient}</Text>)}
            </View>
            <Text>Hapat</Text>
            <View>
                {props.steps.map(step => <Text key={step}>{step}</Text>)}
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        padding: 10
    },
    recipeImage: {
        width: '100%',
        height: 250
    },
    mealDetail: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default RecipeCard;