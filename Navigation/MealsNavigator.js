import React from 'react';
import CategoriesMealScreen from '../Screens/CategoriesMealScreen';
import CategoriesScreen from '../Screens/CategoriesScreen';
import FavouriteScreen from '../Screens/FavouriteSreen';
import FilterScreen from '../Screens/FilterScreen';
import MealDetailScreen from '../Screens/MealDetailScreen';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function MyStack() {
    return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'coral',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
      
        <Stack.Screen
          name="Category"
          component={CategoriesScreen}
          options={{title: 'screen1'}}
        />
 <Stack.Screen
          name="meal"
          component={CategoriesMealScreen}
          options={{title: 'screen2'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

