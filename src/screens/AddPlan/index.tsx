import React from 'react';
import AppText from '@components/AppText';
import { ScrollView, View } from 'react-native';
import IconButton from '@components/IconButton';
import { styles } from './style';
import { fonts } from '@theme/fonts';
import PlanForm from '@components/PlanForm';
import { FormState } from '@interfaces/plan-form';
import { useStore } from '@app/store';

const AddPlan = ({ navigation }: any) => {
  const dispatch = useStore()[1];

  const submitHandler = (form: Omit<FormState, 'id'>) => {
    dispatch('ADD_PLAN', form);
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <IconButton
          type="secondary"
          icon="back"
          fit
          onPress={() => navigation.navigate('Home')}
        />
        <AppText style={[styles.title, fonts.bold]}>Add Plan</AppText>
      </View>
      <PlanForm onSubmit={submitHandler} />
    </ScrollView>
  );
};

export default AddPlan;
