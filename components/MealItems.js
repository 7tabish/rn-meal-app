import React from 'react';
import {View,StyleSheet,Text,TouchableNativeFeedback,ImageBackground} from 'react-native';
import { withOrientation } from 'react-navigation';
const MealItems=props=>{
    return(
        <View style={styles.mealItem}>
            <TouchableNativeFeedback>
                <View>
            {/* header show image and title */}
                <View style={styles.mealHeader}>
                    <ImageBackground source={{uri:props.imageUrl}} style={styles.imageContainer}>
                  
                    <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                    
                    </ImageBackground>
                    
                </View>

                {/* detail section */}
                <View style={styles.mealDetail}>
                    <Text>{props.duration}m</Text>
                    <Text>{props.complexity}m</Text>
                    <Text>{props.affordability}m</Text>
                    
                </View>
                </View>

            </TouchableNativeFeedback>
        </View>
    )

}

const styles=StyleSheet.create({
mealItem:{
    height:200,
    width:'100%',
    backgroundColor:'grey',
    marginVertical:15,
    
},

mealHeader:{
    height:'90%',
    flexDirection:'row',
},
mealDetail:{

    flexDirection:'row',
    paddingHorizontal:10,
  
   
    justifyContent:'space-between',

},
title:{
    color:'white',
    fontSize:20,
    fontFamily:'open-sans-bold',
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding:10,
    textAlign:'center'

    
    
},
imageContainer:{
    width:'100%',
    height:'100%',
    justifyContent:'flex-end'
    
}


});
export default MealItems;