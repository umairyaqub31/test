import React from 'react';
import {Home, MediaLibrary} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MediaLibraryStack = ({route, navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MediaLibraryScreen" component={MediaLibrary} />
    </Stack.Navigator>
  );
};

export default MediaLibraryStack;
