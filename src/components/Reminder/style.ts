import { StyleSheet } from 'react-native';
import { colors } from '@theme/colors';

export const styles = StyleSheet.create({
  reminderCard: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 5,
    flexDirection: 'row',
  },
  pill: {
    alignSelf: 'center',
    paddingRight: 18,
  },
  reminderInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 2,
  },
  hint: {
    color: colors.gray['100'],
  },
  caretRight: {
    alignSelf: 'center',
  },
});
