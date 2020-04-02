import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {CATEGORIES , MEALS} from '../data/dumm-data-category';
import MealItems from '../components/MealItems';
const CategoriesMealScreen=props=>{
    //get the params from the previous screen
    const {categoryId}=props.route.params;
    //set the header value to name param
   
    props.navigation.setOptions({title:'Detail'});
    const displayedMeals=MEALS.filter(meal=>meal.categoryIds.indexOf(categoryId)>=0);

    const renderMealItem=itemData=>{
        return (
            <MealItems 
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            />
        )
    }
return(
    <View style={styles.screen}>
        <FlatList
            data={displayedMeals}
            renderItem={renderMealItem}
            style={{width:'95%'}}
        />
    </View>
)
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default CategoriesMealScreen