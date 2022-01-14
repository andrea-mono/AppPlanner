import React from 'react';
import { View } from 'react-native';
import { styles } from './style';

type Props = {
  focused: boolean;
  children: React.ReactNode;
};

const TabBarIcon: React.FC<Props> = ({ focused, children }) => (
  <View
    style={[styles.tabBarIcon, focused ? styles.focused : styles.notFocused]}>
    {children}
  </View>
);

export default TabBarIcon;
