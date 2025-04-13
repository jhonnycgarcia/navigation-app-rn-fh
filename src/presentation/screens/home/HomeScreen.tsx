import { View, Text, Pressable } from 'react-native';
import { useEffect } from 'react';

import { globalStyles } from '../../theme/theme';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components';
import { type NavigationProp } from '@react-navigation/native';
import { type RootStackParamList } from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>HomeScreen</Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Go to Products"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Setting')}
        label="Go to Setting"
      />
    </View>
  );
};
