import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Users from '../screens/Users/Users';
import UserDetail from '../screens/UserDetail/UserDetail';


const StackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Users">
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

