import { StyleSheet } from 'react-native';
import { colors } from '@theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 80,
  },
  title: {
    fontSize: 30,
    color: colors.black,
    marginTop: 25,
  },
  form: {
    paddingTop: 25,
    paddingBottom: 40,
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
  divider: {
    width: 20,
  },
});
