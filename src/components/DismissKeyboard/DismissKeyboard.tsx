import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const DismissKeyboard: React.FC<Props> = props => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    {props.children}
  </TouchableWithoutFeedback>
);

export default DismissKeyboard;
