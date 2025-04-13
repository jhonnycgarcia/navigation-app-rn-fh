import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ProductScreen, ProductsScreen, SettingScreen } from '../screens';

export type RootStackParamList = {
    Home: undefined;
    Products: undefined;
    Product: { id: number; name: string };
    Setting: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: true,
            headerStyle: {
                elevation: 0,
                shadowColor: 'transparent',
            },
        }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};
