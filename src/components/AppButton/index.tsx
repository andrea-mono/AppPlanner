import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import AppText from '@components/AppText';

interface Props extends ButtonProps {
  type: string;
}

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const PrimaryButton: React.FC<ButtonProps> = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.primary}>
      <AppText style={styles.fontPrimary}>{props.title}</AppText>
    </View>
  </TouchableOpacity>
);

const SecondaryButton: React.FC<ButtonProps> = props => (
  <TouchableOpacity onPress={props.onPress}>
    <AppText style={styles.secondary}>{props.title}</AppText>
  </TouchableOpacity>
);

const AppButton: React.FC<Props> = props => {
  return (
    <>
      {props.type === 'primary' && (
        <PrimaryButton title={props.title} onPress={props.onPress} />
      )}
      {props.type === 'secondary' && (
        <SecondaryButton title={props.title} onPress={props.onPress} />
      )}
    </>
  );
};

export default AppButton;
