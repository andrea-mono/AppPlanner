import { StyleSheet } from 'react-native';
import { colors } from '@theme/colors';

export const styles = StyleSheet.create({
  tabBarIcon: {
    padding: 12,
    borderRadius: 15,
  },
  secondary: {
    backgroundColor: colors.green,
    padding: 20,
    marginVertical: 15,
  },
  focused: {
    backgroundColor: colors.gray['10'],
  },
  notFocused: {
    backgroundColor: colors.transparent,
  },
});
