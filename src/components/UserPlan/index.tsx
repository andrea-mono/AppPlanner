import React from 'react';
import { View } from 'react-native';
import { styles } from '@components/UserPlan/style';
import { fonts } from '@theme/fonts';
import Index from '@components/AppText';
import TodayPlan from '@components/TodayPlan';

type Props = {
  name: string;
};

const UserPlan: React.FC<Props> = props => {
  return (
    <View>
      <View style={styles.headline}>
        <Index style={[styles.title, fonts.bold]}>Hello,</Index>
        <Index style={styles.title}>{props.name}</Index>
      </View>
      <TodayPlan totalPlans={2} completedPlans={1} />
    </View>
  );
};

export default UserPlan;
