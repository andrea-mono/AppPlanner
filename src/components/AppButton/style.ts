import { StyleSheet } from 'react-native';
import { colors } from '@theme/colors';

export const styles = StyleSheet.create({
  primary: {
    backgroundColor: colors.green,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  secondary: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: colors.red,
    alignSelf: 'flex-start',
  },
  fontPrimary: {
    fontSize: 17,
    color: colors.white,
  },
});
