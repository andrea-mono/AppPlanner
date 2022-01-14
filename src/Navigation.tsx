import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';
import Calendar from '@screens/Calendar';
import AddPlan from '@screens/AddPlan';
import Notifications from '@screens/Notifications';
import Profile from '@screens/Profile';
import AppIcon from '@assets/icons/app.svg';
import CalendarIcon from '@assets/icons/calendar.svg';
import PlusIcon from '@assets/icons/plus.svg';
import MessageIcon from '@assets/icons/message.svg';
import AvatarIcon from '@assets/icons/avatar.svg';
import { colors } from '@theme/colors';
import CustomTabBar from '@components/CustomTabBar';
import TabBarIcon from '@components/TabBarIcon/TabBarIcon';

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
        <Tab.Screen
          name="Home"
          component={Home}
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
          component={Calendar}
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
          component={AddPlan}
          options={{
            tabBarButton: ({ onPress }) => (
              <TabBarIcon type="secondary" onPress={onPress}>
                <PlusIcon width={18} height={18} fill={colors.white} />
              </TabBarIcon>
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
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
          component={Profile}
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
    </NavigationContainer>
  );
};

export default Navigation;
