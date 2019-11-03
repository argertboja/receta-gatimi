/*
** @author: Argert Boja
** @created_date: 29/10/2019
** @last_update_date: 29/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: List View for recipes
*/

import React from 'react';
import { Dimensions, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

const ResultListView = props => {

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const styles = StyleSheet.create({
        screen: {
            width: Dimensions.get('window').width / props.numCol - Dimensions.get('window').width / 20,
            marginHorizontal: '2.5%',
            flexDirection: 'row'
        },
    });

    const renderResults = itemData => {
        return (
            <TouchableOpacity
                style={styles.screen}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'Recipe',
                        params: { recipeID: itemData.item.id, recipeName: itemData.item.label },

                    });
                }}>
                <Card value={itemData.item.value} title={itemData.item.label} time={itemData.item.time} />
            </TouchableOpacity>
        );
    }

    return (
        <ScrollView>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={availableMeals} renderItem={renderResults}
                numColumns={props.numCol} />
        </ScrollView>
    );
}

export default ResultListView;