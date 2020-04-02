import React from 'react';
import { StyleSheet, Text, View, Button ,FlatList,TouchableOpacity} from 'react-native';
import {CATEGORIES} from '../data/dumm-data-category';
import RenderGridTile from '../components/CategoryGridTile';
const CategoriesScreen=props=>{
    //set the header title
    props.navigation.setOptions({
        title:'Meal Categories'

    });
    
    // const moveToMeal=()=>{
    //     props.navigation.push('meal',{
    //         name:'Tabish'
    //     })    
    // }
    const renderGridItem=(itemData)=>{
        return(
            <RenderGridTile
            title={itemData.item.title}
            color={itemData.item.color} 
            moveDetail={()=>props.navigation.navigate('meal',{categoryId:itemData.item.id})}
            />
        )
    }
return(
   <FlatList
   numColumns={2}
   data={CATEGORIES}
    renderItem={renderGridItem}
   />
)
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default CategoriesScreen