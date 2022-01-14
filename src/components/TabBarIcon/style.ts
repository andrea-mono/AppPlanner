import { StyleSheet } from 'react-native';
import { colors } from '@theme/colors';

export const styles = StyleSheet.create({
  tabBarIcon: {
    padding: 10,
    borderRadius: 15,
  },
  focused: {
    backgroundColor: colors.gray['10'],
  },
  notFocused: {
    backgroundColor: colors.transparent,
  },
});
