import React from 'react';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { colors } from '@theme/colors';
import AppIcon from '@assets/icons/app.svg';
import AvatarIcon from '@assets/icons/avatar.svg';
import MessageIcon from '@assets/icons/message.svg';
import PlusIcon from '@assets/icons/plus.svg';
import CalendarIcon from '@assets/icons/calendar.svg';

interface Props extends TabIconProps {
  type?: string;
  icon: string;
  size: number;
}

type TabIconProps = {
  focused?: boolean;
  children?: React.ReactNode;
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

const getIcon = (icon: string, size: number, focused: boolean) => {
  switch (icon) {
    case 'app':
      return (
        <AppIcon
          width={size}
          height={size}
          fill={focused ? colors.green : colors.gray['100']}
        />
      );
    case 'calendar':
      return (
        <CalendarIcon
          width={size}
          height={size}
          fill={focused ? colors.green : colors.gray['100']}
        />
      );
    case 'plus':
      return <PlusIcon width={size} height={size} fill={colors.white} />;
    case 'message':
      return (
        <MessageIcon
          width={size}
          height={size}
          fill={focused ? colors.green : colors.gray['100']}
        />
      );
    case 'avatar':
      return (
        <AvatarIcon
          width={size}
          height={size}
          fill={focused ? colors.green : colors.gray['100']}
        />
      );
  }
};

const TabBarIcon: React.FC<Props> = ({
  type = 'primary',
  icon,
  size,
  focused = false,
  onPress,
}) => {
  return (
    <>
      {type === 'primary' && (
        <PrimaryTabIcon focused={focused}>
          {getIcon(icon, size, focused)}
        </PrimaryTabIcon>
      )}
      {type === 'secondary' && (
        <SecondaryTabIcon focused={focused} onPress={onPress}>
          {getIcon(icon, size, focused)}
        </SecondaryTabIcon>
      )}
    </>
  );
};

export default TabBarIcon;
