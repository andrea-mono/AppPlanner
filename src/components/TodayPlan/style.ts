import { StyleSheet } from 'react-native';
import { colors } from '@theme/colors';

export const styles = StyleSheet.create({
  todayPlanCard: {
    backgroundColor: colors.tusk,
    height: 190,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 5,
  },
  hint: {
    color: colors.red,
    fontSize: 13,
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    position: 'absolute',
    bottom: -35,
    width: 300,
    resizeMode: 'contain',
  },
});
