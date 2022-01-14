import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';
import Calendar from '@screens/Calendar';
import AddPlan from '@screens/AddPlan';
import Notifications from '@screens/Notifications';
import Profile from '@screens/Profile';
import Plus from '@assets/icons/plus.svg';
import { colors } from '@theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import { Image, View } from 'react-native';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => {
          return (
            <View
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
              }}>
              <LinearGradient
                colors={['transparent', '#FFF', '#FFF']}
                locations={[0.1, 0.3, 1]}>
                <BottomTabBar {...props} />
              </LinearGradient>
            </View>
          );
        }}
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
