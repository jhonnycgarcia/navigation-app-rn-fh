import { Text, useWindowDimensions, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, type DrawerContentComponentProps } from '@react-navigation/drawer';

import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens';
import { globalColors } from '../theme/theme';


const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerType: dimensions.width >= 768 ? 'permanent' : 'slide',
                drawerActiveBackgroundColor: globalColors.primary,
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: globalColors.primary,
                drawerItemStyle: {
                    borderRadius: 100,
                    paddingHorizontal: 20,
                },
            }}
        >
          <Drawer.Screen name="StackNavigator" component={StackNavigator} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
      );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView {...props}>
            <View
                style={{
                    height: 200,
                    backgroundColor: globalColors.primary,
                    margin: 30,
                    borderRadius: 50,
                }}
            />

            <DrawerItemList {...props} />

            <Text>Version 1.0.0</Text>
        </DrawerContentScrollView>
    );
};
