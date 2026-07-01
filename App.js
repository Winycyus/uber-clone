import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}> 
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator>
         
            <Stack.Screen 
              name="HomeScreen" 
              component={HomeScreen} 
              options={{ headerShown: false }} 
            />
         
            <Stack.Screen 
              name="MapScreen" 
              component={MapScreen} 
              options={{ headerShown: false }} 
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});