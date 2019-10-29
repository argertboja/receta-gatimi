/*
** @author: Argert Boja
** @date: 18/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: The screen which shows the meals marked as favorite
*/

// Imports
import React from 'react';
import { StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/Buttons/HeaderButton';
import ResultListView from '../components/Lists/ResultsListView';

const FavoritesScreen = props => {
    return (
        <ResultListView navigation={props.navigation} numCol={1} />
    );
}

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Të Preferuara',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='Menu'
                iconName='ios-menu'
                onPress={() => { navData.navigation.toggleDrawer() }}>

            </Item>
        </HeaderButtons>
    };
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;