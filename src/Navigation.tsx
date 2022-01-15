import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/Home';
import CalendarScreen from '@screens/Calendar';
import AddPlanScreen from '@screens/AddPlan';
import NotificationsScreen from '@screens/Notifications';
import ProfileScreen from '@screens/Profile';
import AppIcon from '@assets/icons/app.svg';
import CalendarIcon from '@assets/icons/calendar.svg';
import PlusIcon from '@assets/icons/plus.svg';
import MessageIcon from '@assets/icons/message.svg';
import AvatarIcon from '@assets/icons/avatar.svg';
import { colors } from '@theme/colors';
import CustomTabBar from '@components/CustomTabBar';
import TabBarIcon from '@components/TabBarIcon/TabBarIcon';
import { View } from 'react-native';

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
            <TabBarIcon focused={focused}>
              <AppIcon
                width={18}
                height={18}
                fill={focused ? colors.green : colors.gray['100']}
              />
            </TabBarIcon>
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused}>
              <CalendarIcon
                width={18}
                height={18}
                fill={focused ? colors.green : colors.gray['100']}
              />
            </TabBarIcon>
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
              <TabBarIcon type="secondary" onPress={onPress}>
                <PlusIcon width={18} height={18} fill={colors.white} />
              </TabBarIcon>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused}>
              <MessageIcon
                width={18}
                height={18}
                fill={focused ? colors.green : colors.gray['100']}
              />
            </TabBarIcon>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused}>
              <AvatarIcon
                width={18}
                height={18}
                fill={focused ? colors.green : colors.gray['100']}
              />
            </TabBarIcon>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
