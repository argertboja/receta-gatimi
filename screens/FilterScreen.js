import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FilterScreen = props => {
    return (
        <View style={StyleSheet.screen}>
            <Text>
                Filter Screen
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FilterScreen;