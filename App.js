import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PageAccueil from './src/pages/Accueil';
import PageListe from './src/pages/Liste';
import PageAjout from './src/pages/Ajout';
import PageDetails from './src/pages/Details';
import { PersonnesProvider } from './src/context/PersonnesContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PersonnesProvider>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {backgroundColor: '#228CDB'},
            headerTintColor: '#fff'
          }}
          initialRouteName="Accueil">
          <Stack.Screen name="Accueil" component={PageAccueil} />
          <Stack.Screen name="Ajout" component={PageAjout} />
          <Stack.Screen name="Liste" component={PageListe} />
          <Stack.Screen name="Details" component={PageDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </PersonnesProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
