import { StyleSheet } from 'react-native';
import { colors } from '@theme/colors';

export const styles = StyleSheet.create({
  primary: {},
  secondary: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: colors.red,
    alignSelf: 'flex-start',
  },
});
