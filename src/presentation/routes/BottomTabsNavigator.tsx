import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen, Tab2Screen, Tab3Screen } from '../screens';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1Screen} />
      <Tab.Screen name="Tab2" component={Tab2Screen} />
      <Tab.Screen name="Tab3" component={Tab3Screen} />
    </Tab.Navigator>
  );
};
