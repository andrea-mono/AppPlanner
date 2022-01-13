import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { styles } from './style';

type Props = {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

const Card: React.FC<Props> = props => (
  <View style={[styles.card, props.style]}>{props.children}</View>
);

export default Card;
