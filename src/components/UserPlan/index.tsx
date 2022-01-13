import React from 'react';
import { View } from 'react-native';
import { styles } from '@components/UserPlan/style';
import { fonts } from '@theme/fonts';
import AppText from '@components/AppText/AppText';
import TodayPlan from '@components/TodayPlan';

type Props = {
  name: string;
};

const UserPlan: React.FC<Props> = props => {
  return (
    <View>
      <View style={styles.headline}>
        <AppText style={[styles.title, fonts.bold]}>Hello,</AppText>
        <AppText style={styles.title}>{props.name}</AppText>
      </View>
      <TodayPlan totalPlans={2} completedPlans={1} />
    </View>
  );
};

export default UserPlan;
