import { StyleSheet } from 'react-native';
import { colors } from '@theme/colors';

export const styles = StyleSheet.create({
  btn: {
    padding: 14,
    borderRadius: 15,
  },
  primary: {},
  secondary: {
    backgroundColor: colors.gray['50'],
  },
  fit: {
    alignSelf: 'flex-start',
  },
});
