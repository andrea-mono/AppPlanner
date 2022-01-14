import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import Reminder from '@components/Reminder';
import { ReminderInterface } from '@interfaces/reminder';
import { styles } from './style';
import AppText from '@components/AppText';

type Props = {
  reminders: ReminderInterface[];
};

type RenderItemProps = {
  item: ReminderInterface;
};

const DailyReview: React.FC<Props> = props => {
  const renderItem = ({ item }: RenderItemProps) => (
    <Reminder id={item.id} title={item.title} at={item.at} when={item.when} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <AppText style={styles.title}>Daily Review</AppText>
      <FlatList
        data={props.reminders}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default DailyReview;
