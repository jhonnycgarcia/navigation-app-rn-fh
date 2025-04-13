import './gesture-handler.native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/routes/StackNavigator';

export function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

