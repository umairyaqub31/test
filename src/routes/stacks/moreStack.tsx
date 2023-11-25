import React from 'react';
import {Home, More} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MoreStack = ({route, navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MoreScreen" component={More} />
    </Stack.Navigator>
  );
};

export default MoreStack;
