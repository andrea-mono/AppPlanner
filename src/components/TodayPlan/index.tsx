import React from 'react';
import Card from '@components/Card';
import Index from '@components/AppText';
import { styles } from './style';
import { Image, View } from 'react-native';
import AppButton from '@components/AppButton';

type Props = {
  totalPlans: number;
  completedPlans: number;
};

const TodayPlan: React.FC<Props> = props => {
  return (
    <Card style={styles.todayPlanCard}>
      <View style={styles.textContainer}>
        <View>
          <Index style={styles.title}>Your plan for today</Index>
          <Index style={styles.hint}>
            {props.completedPlans} of {props.totalPlans} completed
          </Index>
        </View>
        <View>
          <AppButton type="secondary" title="Show more" />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('@assets/images/flamenco.png')}
        />
      </View>
    </Card>
  );
};

export default TodayPlan;
