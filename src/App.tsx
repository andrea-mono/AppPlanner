import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SearchBar from '@components/SearchBar';
import UserPlan from '@components/UserPlan';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <UserPlan name="Andrea" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
});

export default App;
