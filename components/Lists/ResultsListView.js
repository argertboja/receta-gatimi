/*
** @author: Argert Boja
** @created_date: 29/10/2019
** @last_update_date: 29/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: List View for recipes
*/

import React from 'react';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { RESULTS } from '../../data/results-data';
import Card from '../Card/Card';

const ResultListView = props => {

    const renderResults = itemData => {
        return (
            <TouchableOpacity
                style={styles.screen}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'Recipe',
                        params: { recipeName: itemData.item.label, recipeValue: itemData.item.value },

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
                data={RESULTS} renderItem={renderResults}
                numColumns={props.numCol} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        width: '90%',
        marginHorizontal: '2.5%',

    },
});

export default ResultListView;