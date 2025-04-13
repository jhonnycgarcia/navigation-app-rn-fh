import { View, Text } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components';
export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text>HomeScreen</Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Products' as never)}
        label="Go to Products"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Setting' as never)}
        label="Go to Setting"
      />
    </View>
  );
};
