import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrimaryButton } from '../../components';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export const ProfileScreen = () => {

  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: top + 20,
      }}
    >
      <Text style={{ marginBottom: 10 }}>ProfileScreen</Text>
      <PrimaryButton
        label="Open Drawer"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
};
