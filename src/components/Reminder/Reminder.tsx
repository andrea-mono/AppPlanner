import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Card from '@components/Card';
import AppText from '@components/AppText';
import { ReminderInterface } from '@interfaces/reminder';
import { colors } from '@theme/colors';
import { styles } from './style';
import Pills from '@assets/icons/pills.svg';
import CaretRight from '@assets/icons/caret-right.svg';

const Reminder: React.FC<ReminderInterface> = props => (
  <TouchableOpacity>
    <Card style={styles.reminderCard}>
      <View style={styles.pill}>
        <Pills width={16} height={16} fill={colors.gray['100']} />
      </View>
      <View style={styles.reminderInfo}>
        <AppText style={styles.title}>{props.title}</AppText>
        <AppText style={styles.hint}>
          {props.at} &middot; {props.when}
        </AppText>
      </View>
      <View style={styles.caretRight}>
        <CaretRight width={28} height={28} fill={colors.gray['100']} />
      </View>
    </Card>
  </TouchableOpacity>
);

export default Reminder;
