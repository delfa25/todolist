import 'react-native-get-random-values';
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';

export const PersonnesContext = createContext();

const STORAGE_KEY = '@personnes';

export const PersonnesProvider = ({ children }) => {
  const [personnes, setPersonnes] = useState([]);

  useEffect(() => {
    chargerPersonnes();
  }, []);

  useEffect(() => {
    if (personnes.length > 0 || personnes.length === 0) {
      sauvegarderPersonnes();
    }
  }, [personnes]);

  const chargerPersonnes = async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data !== null) {
        setPersonnes(JSON.parse(data));
      }
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
    }
  };

  const sauvegarderPersonnes = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(personnes));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    }
  };

  const ajouterPersonne = (personne) => {
    setPersonnes([...personnes, { ...personne, id: uuidv4() }]);
  };

  const supprimerPersonne = (id) => {
    setPersonnes(personnes.filter(p => p.id !== id));
  };

  // Fonction de test pour vider le storage
  const viderStorage = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setPersonnes([]);
      console.log('Storage vidé');
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <PersonnesContext.Provider value={{ personnes, ajouterPersonne, supprimerPersonne, viderStorage }}>
      {children}
    </PersonnesContext.Provider>
  );
};
