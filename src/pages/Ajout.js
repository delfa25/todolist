import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import { useContext } from 'react';
import { PersonnesContext } from '../context/PersonnesContext';

const validate = (values) => {
  const errors = {};
  if (!values.nom) {
    errors.nom = 'Le nom est requis';
  }
  if (!values.prenom) {
    errors.prenom = 'Le prénom est requis';
  }
  if (!values.statut) {
    errors.statut = 'Le statut est requis';
  }
  return errors;
};

export default function PageAjout({ navigation }) {
  const { ajouterPersonne } = useContext(PersonnesContext);
  
  return (
    <View style={styles.container}>
      <Text>Ajouter une personne</Text>
      
      <Formik
        initialValues={{ nom: '', prenom: '', statut: '' }}
        validate={validate}
        onSubmit={(values) => {
          ajouterPersonne(values);
          navigation.navigate('Liste');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
          <View style={{ width: '100%' }}>
            <TextInput
              style={styles.input}
              placeholder="Nom"
              onChangeText={handleChange('nom')}
              onBlur={handleBlur('nom')}
              value={values.nom}
            />
            {errors.nom && touched.nom && <Text style={styles.error}>{errors.nom}</Text>}
            
            <TextInput
              style={styles.input}
              placeholder="Prénom"
              onChangeText={handleChange('prenom')}
              onBlur={handleBlur('prenom')}
              value={values.prenom}
            />
            {errors.prenom && touched.prenom && <Text style={styles.error}>{errors.prenom}</Text>}
            
            <Picker
              selectedValue={values.statut}
              style={styles.input}
              onValueChange={(itemValue) => setFieldValue('statut', itemValue)}
            >
              <Picker.Item label="Sélectionner un statut" value="" />
              <Picker.Item label="Etudiant" value="Etudiant" />
              <Picker.Item label="Enseignant" value="Enseignant" />
              <Picker.Item label="ATOS" value="ATOS" />
            </Picker>
            {errors.statut && touched.statut && <Text style={styles.error}>{errors.statut}</Text>}
            
            <View style={styles.buttonContainer}>
              <Button title="Ok" onPress={handleSubmit} />
              <Button title="Annuler" onPress={() => navigation.goBack()} color="#999" />
              <Button title="Liste" onPress={() => navigation.navigate('Liste')} color="#007AFF" />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: -8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    gap: 10,
  },
});
