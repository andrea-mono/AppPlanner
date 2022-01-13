import React, { useState } from 'react';
import { View } from 'react-native';
import InputText from '@components/InputText';
import { styles } from './style';

const SearchBar: React.FC = () => {
  const [someText, setSomeText] = useState('');

  return (
    <View style={styles.container}>
      <InputText
        icon="search"
        value={someText}
        placeholder="Search"
        onChangeText={setSomeText}
      />
    </View>
  );
};

export default SearchBar;
