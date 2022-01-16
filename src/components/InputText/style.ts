import { StyleSheet } from 'react-native';
import { colors } from '@theme/colors';

export const styles = StyleSheet.create({
  inputCard: {
    height: 55,
    flexDirection: 'row',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 12,
  },
  icon: {
    alignSelf: 'center',
    paddingLeft: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
});
