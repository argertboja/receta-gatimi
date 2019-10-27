/*
** @author: Argert Boja
** @created_date: 18/10/2019
** @last_update_date: 27/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: The screen which shows the ingredients
*/

// Imports
import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import SelectMultiple from 'react-native-select-multiple';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/Buttons/HeaderButton';
// Import data
import Colors from '../constants/Colors';
import { INGREDIENTS } from '../data/ingredients_data';
import Icons from '../data/product_icons_data';

class IngredientsScreen extends Component {

    state = null;

    constructor(props) {
        super(props);
    }

    state = {
        selectedIngredients: []
    }

    // State for saving the selected ingredients
    //const [selectedIngredients, setSelectedIngredients] = useState([]);

    // Receiving ingredient data from local files
    //const ingreds = INGREDIENTS;

    // Changing selected ingredients array on click on checkbox
    onSelectionsChange = (ingredient) => {
        //setSelectedIngredients(ingredient);
        //this.setState({ selectedIngredients: ingredient });
        this.setState({ selectedIngredients: ingredient }, function () {
            const { setParams } = this.props.navigation;
            setParams({ selectedIDs: this.state.selectedIngredients });
        });

    }

    // Rendering list items (ingredients)
    renderLabel = (label, style) => {
        return (
            <View style={styles.ingredientContainer}>
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.ingredientName}>{label}</Text>
                </View>
                <Image source={Icons[label]} />
            </View>
        )
    }

    // Navigation of screens

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Përbërësit',
            headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item
                    title='Kerko'
                    iconName='ios-search'
                    onPress={() => {
                        navigation.navigate({
                            routeName: 'Results',
                            params: {
                                selectedIDarray: navigation.getParam('selectedIDs')
                            }
                        })
                    }}
                />
            </HeaderButtons>
        }

    };

    // Main view which displays igredients
    render() {
        const ingreds = INGREDIENTS;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <SelectMultiple
                        items={ingreds}
                        renderLabel={this.renderLabel}
                        selectedItems={this.state.selectedIngredients}
                        onSelectionsChange={this.onSelectionsChange}
                        checkboxSource={require('../assets/images/icons/checkbox-unchecked.png')}
                        selectedCheckboxSource={require('../assets/images/icons/checkbox-checked.png')} />

                    {/* Button for going to next screen and sending selected ingredients*/}

                </ScrollView>
                {/*<Button
                    style={{ position: 'fixed' }}
                    color={Colors.primary}
                    title='Kërko'
                    onPress={() => {
                        this.props.navigation.navigate({
                            routeName: 'Results',
                            params: {
                                selectedIDarray: this.state.selectedIngredients
                            }
                        })
                    }
                    }
                />*/}
            </View>);
    }
}

// // Navigation of screens
// IngredientsScreen.navigationOptions = {
//     headerTitle: 'Përbërësit',
//     headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton} >
//         <Item title='Kerko' iconName='ios-search' onPress={() => { }} />
//     </HeaderButtons>
// }



// Styling
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ingredientContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        flexDirection: 'row'
    },
    button: {
        marginVertical: 50
    },
    ingredientName: {
        color: Colors.primary,
        fontSize: 18,
        paddingLeft: 10,
    },
});

export default IngredientsScreen;