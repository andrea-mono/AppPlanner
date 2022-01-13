import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { styles } from './style';

type Props = {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

const Index: React.FC<Props> = props => (
  <Text style={[props.style, styles.defaultFont]}>{props.children}</Text>
);

export default Index;
