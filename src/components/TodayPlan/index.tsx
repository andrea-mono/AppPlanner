import React from 'react';
import Card from '@components/Card';
import AppText from '@components/AppText/AppText';

type Props = {
  totalPlans: number;
  completedPlans: number;
};

const TodayPlan: React.FC<Props> = props => {
  return (
    <Card>
      <AppText>Your plan for today</AppText>
      <AppText>
        {props.completedPlans} of {props.totalPlans} completed
      </AppText>
    </Card>
  );
};

export default TodayPlan;
