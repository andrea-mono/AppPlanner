import React from 'react';
import { SafeAreaView } from 'react-native';
import SearchBar from '@components/SearchBar';
import UserPlan from '@components/UserPlan';
import DailyReview from '@components/DailyReview';
import { styles } from './style';
import { useStore } from '@app/store';

const Home = () => {
  const state = useStore()[0];

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <UserPlan name="Andrea" />
      <DailyReview reminders={state.plans} />
    </SafeAreaView>
  );
};

export default Home;
