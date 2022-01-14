import React from 'react';
import { styles } from '@components/CustomTabBar/style';
import LinearGradient from 'react-native-linear-gradient';
import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

const CustomTabBar: React.FC<BottomTabBarProps> = props => (
  <View style={styles.customTabBar}>
    <LinearGradient
      colors={['transparent', '#FFF', '#FFF']}
      locations={[0.1, 0.3, 1]}>
      <BottomTabBar {...props} />
    </LinearGradient>
  </View>
);

export default CustomTabBar;
