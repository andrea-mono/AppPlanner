import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';
import Calendar from '@screens/Calendar';
import AddPlan from '@screens/AddPlan';
import Notifications from '@screens/Notifications';
import Profile from '@screens/Profile';
import Plus from '@assets/icons/plus.svg';
import { colors } from '@theme/colors';
import CustomTabBar from '@components/CustomTabBar';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        sceneContainerStyle={{
          backgroundColor: colors.white,
        }}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            backgroundColor: 'transparent',
            height: 120,
            paddingTop: 40,
            borderTopWidth: 0,
            elevation: 0,
          },
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="AddPlan" component={AddPlan} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
