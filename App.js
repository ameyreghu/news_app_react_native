import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { DailyNewsScreen } from './src/screens/DailyNewsScreen';
import * as RouteNames from './src/constants/RouteNames';
import { ArticleDetailsScreen } from './src/screens/ArticleDetailsScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const Stack =createStackNavigator();

const AppNavigator=()=>{
  return(
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={RouteNames.Home} component={DailyNewsScreen}/>
        <Stack.Screen name={RouteNames.ArticleDetails} component={ArticleDetailsScreen}/>
      </Stack.Navigator>
   </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
