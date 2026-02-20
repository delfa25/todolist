import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useContext } from 'react';
import { PersonnesContext } from '../context/PersonnesContext';

export default function PageListe({ navigation }) {
  const { personnes, supprimerPersonne, viderStorage } = useContext(PersonnesContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des personnes</Text>
      
      {personnes.length === 0 ? (
        <Text>Aucune personne enregistrée</Text>
      ) : (
        <FlatList
          data={personnes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.nom} {item.prenom}</Text>
              <View style={styles.buttonGroup}>
                <Button 
                  title="Détails" 
                  onPress={() => navigation.navigate('Details', { personne: item })} 
                />
                <Button 
                  title="Supprimer" 
                  color="red"
                  onPress={() => supprimerPersonne(item.id)} 
                />
              </View>
            </View>
          )}
        />
      )}
      
      <View style={styles.buttonContainer}>
        <Button title="Retour" onPress={() => navigation.goBack()} />
        <Button title="Vider tout" color="orange" onPress={viderStorage} />
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
    flex: 1,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    gap: 10,
  },
});
