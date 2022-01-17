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
  focused?: boolean;
  onPress: () => void;
};

const getIcon = (name: string, focused = false) => {
  switch (name) {
    case 'back':
      return <ArrowLeft width={24} height={24} fill={colors.gray['100']} />;
    case 'plus':
      return <Plus width={10} height={10} fill={colors.black} />;
    case 'beforeEating':
      return (
        <BeforeEating
          width={60}
          height={60}
          fill={focused ? colors.white : colors.gray['100']}
        />
      );
    case 'duringEating':
      return (
        <DuringEating
          width={60}
          height={60}
          fill={focused ? colors.white : colors.gray['100']}
        />
      );
    case 'afterEating':
      return (
        <AfterEating
          width={60}
          height={60}
          fill={focused ? colors.white : colors.gray['100']}
        />
      );
  }
};

const PrimaryButton: React.FC<ButtonProps> = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.btn, styles.primary, props.fit ? styles.fit : {}]}>
        {getIcon(props.icon)}
      </View>
    </TouchableOpacity>
  );
};

const SecondaryButton: React.FC<ButtonProps> = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View
      style={[
        styles.btn,
        styles.secondary,
        props.fit ? styles.fit : {},
        props.focused ? styles.focused : {},
      ]}>
      {getIcon(props.icon, props.focused)}
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
          focused={props.focused}
          onPress={props.onPress}
        />
      )}
    </>
  );
};

export default IconButton;
