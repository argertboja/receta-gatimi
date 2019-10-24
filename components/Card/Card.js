/*
** @author: Argert Boja
** @date: 23/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: Card View for a meal reasult
*/

// Imports
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import RecipesImages from '../../data/recipes_images_data';

const card = props => {
    return (
        <View style={styles.cardContainer}>
            <Image style={styles.thumbnail} source={RecipesImages[props.value]} />
            <View style={styles.text}>
                <Text >
                    {props.title}
                </Text>
                <Text >
                    {props.time}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        marginHorizontal: '2.5%',
        marginVertical: 5,
        borderColor: Colors.primary,
        borderRadius: 5,
        borderWidth: 1,
        width: '100%',
        elevation: 2,
        overflow: 'hidden'
    },
    text: {
        flex: 1,
        width: '100%'
    },
    thumbnail: {
        width: '100%',
        height: 150
    }
});

export default card;