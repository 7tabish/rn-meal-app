import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FilterScreen=props=>{
return(
    <View style={styles.screen}>
        <Text>On Filter screen</Text>
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
export default FilterScreen