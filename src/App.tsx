import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SearchBar from '@components/SearchBar';
import UserPlan from '@components/UserPlan';
import DailyReview from '@components/DailyReview/DailyReview';

const App = () => {
  const reminders: any[] = [
    {
      title: 'Oxycodone',
      at: '10:00 AM',
      when: 'Before eating',
    },
    {
      title: 'Naxolone',
      at: '04:00 AM',
      when: 'After eating',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <UserPlan name="Andrea" />
      <DailyReview reminders={reminders} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
});

export default App;
