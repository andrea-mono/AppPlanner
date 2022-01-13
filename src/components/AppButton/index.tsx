import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import AppText from '@components/AppText';

interface Props extends ButtonProps {
  type: string;
}

type ButtonProps = {
  title: string;
};

const PrimaryButton: React.FC<ButtonProps> = props => (
  <TouchableOpacity>
    <View style={styles.primary}>
      <AppText>{props.title}</AppText>
    </View>
  </TouchableOpacity>
);

const SecondaryButton: React.FC<ButtonProps> = props => (
  <TouchableOpacity>
    <AppText style={styles.secondary}>{props.title}</AppText>
  </TouchableOpacity>
);

const AppButton: React.FC<Props> = props => {
  return (
    <>
      {props.type === 'primary' && <PrimaryButton title={props.title} />}
      {props.type === 'secondary' && <SecondaryButton title={props.title} />}
    </>
  );
};

export default AppButton;
