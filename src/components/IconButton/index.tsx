import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { colors } from '@theme/colors';
import Plus from '@assets/icons/plus.svg';
import ArrowLeft from '@assets/icons/arrow-left.svg';
import BeforeEating from '@assets/icons/before-eating.svg';
import DuringEating from '@assets/icons/during-eating.svg';
import AfterEating from '@assets/icons/after-eating.svg';

interface Props extends ButtonProps {
  type: string;
}

type ButtonProps = {
  icon: string;
  fit?: boolean;
  onPress: () => void;
};

type Icon = {
  [key: string]: JSX.Element;
};

const icons: Icon = {
  back: <ArrowLeft width={24} height={24} fill={colors.gray['100']} />,
  plus: <Plus width={10} height={10} fill={colors.black} />,
  beforeEating: (
    <BeforeEating width={60} height={60} fill={colors.gray['100']} />
  ),
  duringEating: (
    <DuringEating width={60} height={60} fill={colors.gray['100']} />
  ),
  afterEating: <AfterEating width={60} height={60} fill={colors.gray['100']} />,
};

const PrimaryButton: React.FC<ButtonProps> = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.btn, styles.primary, props.fit ? styles.fit : {}]}>
        {icons[props.icon]}
      </View>
    </TouchableOpacity>
  );
};

const SecondaryButton: React.FC<ButtonProps> = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[styles.btn, styles.secondary, props.fit ? styles.fit : {}]}>
      {icons[props.icon]}
    </View>
  </TouchableOpacity>
);

const IconButton: React.FC<Props> = props => {
  return (
    <>
      {props.type === 'primary' && (
        <PrimaryButton
          icon={props.icon}
          fit={props.fit}
          onPress={props.onPress}
        />
      )}
      {props.type === 'secondary' && (
        <SecondaryButton
          icon={props.icon}
          fit={props.fit}
          onPress={props.onPress}
        />
      )}
    </>
  );
};

export default IconButton;
