import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ProductsScreen, SettingScreen } from '../screens';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};
