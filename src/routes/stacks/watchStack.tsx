import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard, SearchScreen, Watch} from '@screens';

const Stack = createStackNavigator();

const WatchStack = ({route, navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="WatchScreen" component={Watch} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default WatchStack;
