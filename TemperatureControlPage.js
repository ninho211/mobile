import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assurez-vous d'avoir installé react-native-vector-icons

const TemperatureControlPage = () => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [currentTemperature, setCurrentTemperature] = useState(20);
  const [heatMode, setHeatMode] = useState(true);
  const [targetTemperature, setTargetTemperature] = useState(20);

  const toggleRoomSelection = (room) => {
    if (selectedRooms.includes(room)) {
      setSelectedRooms(selectedRooms.filter(selectedRoom => selectedRoom !== room));
    } else {
      setSelectedRooms([...selectedRooms, room]);
    }
  };

  const handleTemperatureChange = (temperature) => {
    setTargetTemperature(temperature);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Contrôle de la température</Text>
      </View>
      <View style={styles.optionsContainer}>
        <Text style={styles.label}>Pièces :</Text>
        <View style={styles.roomsContainer}>
          <TouchableOpacity onPress={() => toggleRoomSelection('Salon')} style={[styles.roomButton, selectedRooms.includes('Salon') && styles.selectedRoomButton]}>
            <Text style={[styles.roomButtonText, selectedRooms.includes('Salon') && styles.selectedRoomButtonText]}>Salon</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleRoomSelection('Chambre')} style={[styles.roomButton, selectedRooms.includes('Chambre') && styles.selectedRoomButton]}>
            <Text style={[styles.roomButtonText, selectedRooms.includes('Chambre') && styles.selectedRoomButtonText]}>Chambre</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleRoomSelection('Bureau')} style={[styles.roomButton, selectedRooms.includes('Bureau') && styles.selectedRoomButton]}>
            <Text style={[styles.roomButtonText, selectedRooms.includes('Bureau') && styles.selectedRoomButtonText]}>Bureau</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleRoomSelection('Cuisine')} style={[styles.roomButton, selectedRooms.includes('Cuisine') && styles.selectedRoomButton]}>
            <Text style={[styles.roomButtonText, selectedRooms.includes('Cuisine') && styles.selectedRoomButtonText]}>Cuisine</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Température actuelle :</Text>
        <Text style={styles.currentTemperature}>{currentTemperature}°C</Text>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Mode chauffage</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={heatMode ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setHeatMode}
            value={heatMode}
          />
        </View>

        <Text style={styles.label}>Température cible :</Text>
        <TextInput
          style={styles.temperatureInput}
          value={String(targetTemperature)}
          onChangeText={text => handleTemperatureChange(parseInt(text) || 0)}
          keyboardType="numeric"
        />
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
  currentTemperature: {
    fontSize: 20,
    marginBottom: 20,
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
  temperatureInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default TemperatureControlPage;
