/*
** @author: Argert Boja
** @date: 23/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: Card View for a meal reasult
*/

// Imports
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import RecipesImages from '../../data/recipes_images_data';

const card = props => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.header}>
                <ImageBackground style={styles.thumbnail} source={RecipesImages[props.value]} >
                    <Text style={styles.headerTitle} numberOfLines={1}>{props.title}</Text>
                </ImageBackground>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerDetails}>
                    {props.time}
                </Text>
                <Text style={styles.footerDetails}>
                    match
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
        overflow: 'hidden',
        height: 180
    },
    footer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '15%',
    },
    footerDetails: {
        color: Colors.primary
    },
    header: {
        height: '85%',
    },
    headerTitle: {
        fontSize: 18,
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        textAlign: 'center',
    },
    thumbnail: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    }
});

export default card;