import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import Home from '../screens/Home';

// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
function Routes() {
  return (
      <NavigationContainer>
    {/* <Tab.Navigator>
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator> */}
    <Drawer.Navigator>
      {/* <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="SignUp" component={SignUp} /> */}
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Branch" component={SignUp} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default Routes;