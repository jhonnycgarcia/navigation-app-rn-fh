import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen, Tab2Screen, Tab3Screen } from '../screens';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            // headerShown: false,
            tabBarActiveTintColor: globalColors.primary,
            headerStyle: {
                elevation: 0,
                backgroundColor: globalColors.background,
                shadowColor: 'transparent',
                borderColor: 'transparent',
            },
            sceneStyle: {
                backgroundColor: globalColors.background,
            },
            tabBarLabelStyle: {
                marginBottom: 5,
            },
            tabBarStyle: {
                borderTopWidth: 0,
                elevation: 0,
            },
        }}
    >
      <Tab.Screen name="Tab1" options={{ title: 'Tab1', tabBarIcon: ({ color }) => <Text style={{ color }}>T1</Text> }} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{ title: 'Tab2', tabBarIcon: ({ color }) => <Text style={{ color }}>T2</Text> }} component={Tab2Screen} />
      <Tab.Screen name="Tab3" options={{ title: 'Tab3', tabBarIcon: ({ color }) => <Text style={{ color }}>T3</Text> }} component={Tab3Screen} />
    </Tab.Navigator>
  );
};
