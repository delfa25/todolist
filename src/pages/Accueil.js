import { StyleSheet, Text, View, Button } from 'react-native';


export default function PageAccueil({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Bonjour L3 MIAGE!</Text>
      <Button title="Ajout" onPress={() => navigation.navigate('Ajout')} />
      <Button title="Liste" onPress={() => navigation.navigate('Liste', { nom: 'DIAWARA Mama Fadel' })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});