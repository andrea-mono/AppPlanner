import React from 'react';
import {
  View,
  TextInput,
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { styles } from './style';
import SearchIcon from '@assets/icons/search.svg';
import PillsIcon from '@assets/icons/pills.svg';
import CalendarIcon from '@assets/icons/calendar.svg';
import BellIcon from '@assets/icons/bell.svg';
import { colors } from '@theme/colors';
import Card from '@components/Card';

type Props = {
  icon?: string;
  style?: StyleProp<ViewStyle>;
  value?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
};

type iconsOptions = {
  [key: string]: JSX.Element;
};

const icons: iconsOptions = {
  search: <SearchIcon width={40} height={40} fill={colors.gray['100']} />,
  pills: <PillsIcon width={20} height={20} fill={colors.gray['100']} />,
  calendar: <CalendarIcon width={20} height={20} fill={colors.gray['100']} />,
  bell: <BellIcon width={20} height={20} fill={colors.gray['100']} />,
};

const InputText: React.FC<Props> = props => {
  const { style, ...rest } = props;
  return (
    <Card style={[styles.inputCard, style]}>
      {props.icon && <View style={styles.icon}>{icons[props.icon]}</View>}
      <TextInput
        {...rest}
        style={styles.input}
        placeholderTextColor={colors.gray['100']}
      />
    </Card>
  );
};

export default InputText;
