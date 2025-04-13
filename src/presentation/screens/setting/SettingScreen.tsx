import { View, Text } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components';
import { type NavigationProp, StackActions, useNavigation } from '@react-navigation/native';
import { type RootStackParamList } from '../../routes/StackNavigator';

export const SettingScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10, fontSize: 30 }}>SettingScreen</Text>
      <PrimaryButton
        label="Go Back"
        onPress={() => navigation.goBack()}
      />
      <PrimaryButton
        label="Go to Home"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
