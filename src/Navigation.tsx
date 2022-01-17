import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import HomeScreen from '@screens/Home';
import CalendarScreen from '@screens/Calendar';
import AddPlanScreen from '@screens/AddPlan';
import NotificationsScreen from '@screens/Notifications';
import ProfileScreen from '@screens/Profile';
import { colors } from '@theme/colors';
import CustomTabBar from '@components/CustomTabBar';
import TabBarIcon from '@components/TabBarIcon';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
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
          height: 110,
          paddingTop: 20,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon="app" size={18} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon="calendar" size={18} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="AddPlan"
        component={AddPlanScreen}
        options={{
          tabBarStyle: { display: 'none' },
          tabBarButton: ({ onPress }) => (
            <View style={{ paddingHorizontal: 10 }}>
              <TabBarIcon
                icon="plus"
                size={18}
                type="secondary"
                onPress={onPress}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon="message" size={18} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon="avatar" size={18} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
