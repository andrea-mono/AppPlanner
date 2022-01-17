import React from 'react';
import AppText from '@components/AppText';
import { ScrollView, View } from 'react-native';
import IconButton from '@components/IconButton';
import { styles } from './style';
import { fonts } from '@theme/fonts';
import PlanForm from '@components/PlanForm/PlanForm';

const AddPlan = ({ navigation }: any) => {
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
      <PlanForm />
    </ScrollView>
  );
};

export default AddPlan;
