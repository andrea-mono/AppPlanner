import React from 'react';
import { View, TextInput, KeyboardTypeOptions } from 'react-native';
import { styles } from './style';
import SearchIcon from '@assets/icons/search.svg';
import { colors } from '@theme/colors';
import Card from '@components/Card';

type Props = {
  icon?: string;
  value: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: (text: string) => void;
};

type iconsOptions = {
  [key: string]: JSX.Element;
};

const icons: iconsOptions = {
  search: <SearchIcon width={40} height={40} fill="#9b9b9b" />,
};

const InputText: React.FC<Props> = props => {
  return (
    <Card style={styles.inputCard}>
      {props.icon && <View style={styles.icon}>{icons[props.icon]}</View>}
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={colors.gray['100']}
        onChangeText={props.onChangeText}
      />
    </Card>
  );
};

export default InputText;
