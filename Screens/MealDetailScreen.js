import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MealDetailScreen=props=>{
return(
    <View style={styles.screen}>
        <Text>On meal detail screen</Text>
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
export default MealDetailScreen