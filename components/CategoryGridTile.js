import React from 'react';
import {View,StyleSheet,Text,Button,TouchableNativeFeedback,TouchableOpacity} from 'react-native';

const RenderGridTile=props=>{
    return(
        <View style={styles.gridView}>
        <TouchableNativeFeedback  style={{flex:1,overflow:'hidden'}} onPress={props.moveDetail}>
        <View style={{...styles.textContainer,...{backgroundColor:props.color}}}>
            <Text style={styles.textCategory}>{props.title}</Text>
       
        </View>
        </TouchableNativeFeedback>
        </View>
    )
}
const styles=StyleSheet.create({
    gridView:{
        flex:1,
        margin:15,
        height:100,
    
    },
    textContainer:{
        flex:1,
        padding:14,
        borderRadius:15,
        elevation:3,
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    textCategory:{
        fontFamily:'open-sans-bold',
        color:'black'
    }

})
export default RenderGridTile