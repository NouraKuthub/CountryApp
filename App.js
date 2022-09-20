import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Country from './src/Country';
import CountryDetails from './src/CountryDetails';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Country" component={Country}/>
        <Stack.Screen name="CountryDetails" component={CountryDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
