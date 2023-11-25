import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard} from '@screens';

const Stack = createStackNavigator();

const DashboardStack = ({route, navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DashboardScreen" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default DashboardStack;
