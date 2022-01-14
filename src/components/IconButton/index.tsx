import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from '@components/AppButton/style';
import Plus from '@assets/icons/plus.svg';
import { colors } from '@theme/colors';

interface Props extends ButtonProps {
  type: string;
}

type ButtonProps = {
  icon: string;
};

type Icon = {
  [key: string]: JSX.Element;
};

const icons: Icon = {
  plus: <Plus width={10} height={10} fill={colors.black} />,
};

const PrimaryButton: React.FC<ButtonProps> = props => (
  <TouchableOpacity>
    <View style={styles.primary}>{icons[props.icon]}</View>
  </TouchableOpacity>
);

const SecondaryButton: React.FC<ButtonProps> = props => (
  <TouchableOpacity>{icons[props.icon]}</TouchableOpacity>
);

const IconButton: React.FC<Props> = props => {
  return (
    <>
      {props.type === 'primary' && <PrimaryButton icon={props.icon} />}
      {props.type === 'secondary' && <SecondaryButton icon={props.icon} />}
    </>
  );
};

export default IconButton;
