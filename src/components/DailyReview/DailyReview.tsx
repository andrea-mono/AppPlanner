import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import Reminder from '@components/Reminder/Reminder';
import { ReminderInterface } from '@interfaces/reminder';

type Props = {
  reminders: ReminderInterface[];
};

type RenderItemProps = {
  item: ReminderInterface;
};

const DailyReview: React.FC<Props> = props => {
  const renderItem = ({ item }: RenderItemProps) => (
    <Reminder title={item.title} at={item.at} when={item.when} />
  );

  return (
    <SafeAreaView>
      <FlatList data={props.reminders} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default DailyReview;
