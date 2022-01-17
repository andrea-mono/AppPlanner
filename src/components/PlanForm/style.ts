import { StyleSheet } from 'react-native';
import { colors } from '@theme/colors';

export const styles = StyleSheet.create({
  form: {
    paddingTop: 25,
    paddingBottom: 60,
  },
  field: {
    marginBottom: 30,
  },
  fieldTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 12,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
  divider: {
    width: 20,
  },
});
