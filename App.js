import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name = "Signup"
          component={SignUp}/>
          <Stack.Screen name = "Signin"
          component={SignIn}/>
          <Stack.Screen name = "Home"
          component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
