/*
** @author: Argert Boja
** @date: 24/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: Card view for Meal Recipe
*/

// Imports
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import RecipesImages from '../../data/recipes_images_data';

const RecipeCard = props => {
    let stepIndex = 1;
    return (
        <ScrollView style={styles.cardContainer}>
            <Image source={RecipesImages[props.value]} style={styles.recipeImage} />
            <View style={styles.details}>
                <View style={styles.mealDetail}>
                    <View style={styles.itemDetail}>
                        <Ionicons name='ios-trending-up' size={25} color={Colors.primary} />
                        <Text style={{ paddingHorizontal: 10 }}>
                            {props.id}
                        </Text>
                    </View>
                    <View style={styles.itemDetail}>
                        <Ionicons name='ios-timer' size={25} color={Colors.primary} />
                        <Text style={{ paddingHorizontal: 10 }}>
                            {props.time}
                        </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.sectionHeaders}>Përberesit</Text>
                    <View style={styles.ingredientsContainer}>
                        <View style={styles.quantityContainer}>
                            {props.quantities.map(quantity => <Text key={quantity} style={styles.quantity}>{quantity}</Text>)}
                        </View>
                        <View style={styles.ingredientContainer}>
                            {props.ingredients.map(ingredient => <Text key={ingredient} style={styles.ingredients}>{ingredient}</Text>)}
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.sectionHeaders}>Hapat</Text>
                    <View>
                        {props.steps.map(step =>
                            <View
                                key={step}
                                style={{
                                    ...styles.card,
                                    backgroundColor: (stepIndex % 2 === 1) ? 'white' : 'rgba(211,211,211, 0.1)',
                                    paddingVertical: 10,
                                    flexDirection: 'row'
                                }}>
                                <Text style={styles.index}>{stepIndex++}.</Text>
                                <Text style={styles.steps}> {step}</Text>
                            </View>)}
                    </View>

                </View>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
    },
    steps: {
        padding: 10,
        width: '90%',
        lineHeight: 18,
        textAlign: 'justify'
    },
    recipeImage: {
        width: '100%',
        height: 250
    },
    details: {
        padding: 10,
    },
    mealDetail: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(211,211,211, 0.1)',
        borderRadius: 4,
        elevation: 0.8
    },
    itemDetail: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    sectionHeaders: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 23,
        color: Colors.primary
    },
    card: {
        backgroundColor: 'rgba(211,211,211, 0.1)',
        borderRadius: 4,
        elevation: 0.8,
        marginTop: 10
    },
    ingredients: {
        borderBottomColor: 'rgba(211,211,211, 0.5)',
        borderBottomWidth: 1,
        padding: 5,
        textAlign: 'center',
        marginTop: 10
    },
    quantity: {
        borderBottomColor: 'rgba(211,211,211, 0.5)',
        borderBottomWidth: 1,
        padding: 5,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
        marginTop: 10
    },
    quantityContainer: {
        flex: 1,
    },
    ingredientContainer: {
        flex: 1,
    },
    ingredientsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    index: {
        color: Colors.primary,
        borderRightWidth: 1,
        borderRightColor: 'rgba(211,211,211, 0.5)',
        padding: 10,
        fontWeight: 'bold'
    }
});

export default RecipeCard;