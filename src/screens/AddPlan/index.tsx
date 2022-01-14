import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import AppText from '@components/AppText';
import { View } from 'react-native';

const AddPlan: React.FC<any> = ({ route, navigation }) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName === 'AddPlan') {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'flex' } });
    }
  }, [route, navigation]);

  return (
    <View>
      <AppText>Add Plan</AppText>
    </View>
  );
};

export default AddPlan;
