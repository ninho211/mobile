
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assurez-vous d'avoir installé react-native-vector-icons

const ControlAccessPage = () => {
  const [newUser, setNewUser] = useState('');
  const [users, setUsers] = useState([]);

  const handleAddUser = () => {
    if(newUser.trim() !== '') {
      setUsers([...users, newUser]);
      Alert.alert('Utilisateur ajouté', `L'utilisateur ${newUser} a été ajouté avec succès.`);
      setNewUser('');
    } else {
      Alert.alert('Erreur', 'Veuillez entrer le nom de l\'utilisateur.');
    }
  };

  const handleRemoveUser = (user) => {
    const updatedUsers = users.filter(u => u !== user);
    setUsers(updatedUsers);
    Alert.alert('Utilisateur supprimé', `L'utilisateur ${user} a été supprimé avec succès.`);
  };

  const handleDoorControl = () => {
    // Logique pour ouvrir ou fermer les portes
    Alert.alert('Portes', 'Les portes ont été ouvertes ou fermées avec succès.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Contrôle d'accès</Text>
      </View>
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.gridItem} onPress={handleAddUser}>
          <Icon name="person-add-outline" size={28} style={styles.icon} />
          <Text style={styles.gridText}>Ajouter un utilisateur</Text>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nom de l'utilisateur"
            value={newUser}
            onChangeText={text => setNewUser(text)}
          />
        </View>
        {users.map(user => (
          <TouchableOpacity key={user} style={styles.gridItem} onPress={() => handleRemoveUser(user)}>
            <Icon name="person-outline" size={28} style={styles.icon} />
            <Text style={styles.gridText}>{user}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.gridItem} onPress={handleDoorControl}>
          <Icon name="lock-closed-outline" size={28} style={styles.icon} />
          <Text style={styles.gridText}>Fermer / Ouvrir les portes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  gridContainer: {
    padding: 20,
  },
  gridItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  gridText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
  },
});

export default ControlAccessPage;
