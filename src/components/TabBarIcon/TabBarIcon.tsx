import React from 'react';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

interface Props extends TabIconProps {
  type?: string;
}

type TabIconProps = {
  focused?: boolean;
  children: React.ReactNode;
  onPress?: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent,
  ) => void;
};

const PrimaryTabIcon: React.FC<TabIconProps> = ({ focused, children }) => (
  <View
    style={[styles.tabBarIcon, focused ? styles.focused : styles.notFocused]}>
    {children}
  </View>
);

const SecondaryTabIcon: React.FC<TabIconProps> = ({ children, onPress }) => (
  <TouchableOpacity
    style={[styles.tabBarIcon, styles.secondary]}
    onPress={onPress}>
    {children}
  </TouchableOpacity>
);

const TabBarIcon: React.FC<Props> = ({
  type = 'primary',
  focused,
  children,
  onPress,
}) => {
  return (
    <>
      {type === 'primary' && (
        <PrimaryTabIcon focused={focused}>{children}</PrimaryTabIcon>
      )}
      {type === 'secondary' && (
        <SecondaryTabIcon focused={focused} onPress={onPress}>
          {children}
        </SecondaryTabIcon>
      )}
    </>
  );
};

export default TabBarIcon;
