import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assurez-vous d'avoir installé react-native-vector-icons

const Store = () => {
  const [storeStatus, setStoreStatus] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');

  const toggleStore = () => {
    setStoreStatus(!storeStatus);
    const status = storeStatus ? 'fermé' : 'ouvert';
    Alert.alert('Store', `Le store est ${status} dans la pièce ${selectedRoom}.`);
  };

  const handleRoomSelection = (room) => {
    setSelectedRoom(room);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Store</Text>
      </View>
      <View style={styles.optionsContainer}>
        <Text style={styles.label}>Sélectionner une pièce :</Text>
        <View style={styles.roomsContainer}>
          <TouchableOpacity onPress={() => handleRoomSelection('Salon')} style={[styles.roomButton, selectedRoom === 'Salon' && styles.selectedRoomButton]}>
            <Text style={[styles.roomButtonText, selectedRoom === 'Salon' && styles.selectedRoomButtonText]}>Salon</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRoomSelection('Chambre')} style={[styles.roomButton, selectedRoom === 'Chambre' && styles.selectedRoomButton]}>
            <Text style={[styles.roomButtonText, selectedRoom === 'Chambre' && styles.selectedRoomButtonText]}>Chambre</Text>
          </TouchableOpacity>
          {/* Ajouter d'autres boutons pour les pièces */}
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Store</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={storeStatus ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleStore}
            value={storeStatus}
          />
        </View>
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
  optionsContainer: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  roomsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  roomButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  selectedRoomButton: {
    backgroundColor: '#81b0ff',
  },
  roomButtonText: {
    fontSize: 16,
  },
  selectedRoomButtonText: {
    color: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 16,
    marginRight: 10,
  },
});

export default Store;
