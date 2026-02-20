import { StyleSheet, Text, View, Button } from 'react-native';
import { useContext } from 'react';
import { PersonnesContext } from '../context/PersonnesContext';

export default function PageDetails({ navigation, route }) {
  const { personne } = route.params;
  const { supprimerPersonne } = useContext(PersonnesContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détails de la personne</Text>
      
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Nom :</Text>
        <Text style={styles.value}>{personne.nom}</Text>
      </View>
      
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Prénom :</Text>
        <Text style={styles.value}>{personne.prenom}</Text>
      </View>
      
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Statut :</Text>
        <Text style={styles.value}>{personne.statut}</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="Retour" onPress={() => navigation.goBack()} />
        <Button 
          title="Supprimer" 
          color="red"
          onPress={() => {
            supprimerPersonne(personne.id);
            navigation.navigate('Liste');
          }} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  detailContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  value: {
    fontSize: 18,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    gap: 10,
  },
});
