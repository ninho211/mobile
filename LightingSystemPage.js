import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Switch, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assurez-vous d'avoir installé react-native-vector-icons

const LightingSystemPage = () => {
  const [lightingStatus, setLightingStatus] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Salon');
  const [selectedColor, setSelectedColor] = useState('Blanc');
  const [intensity, setIntensity] = useState(50);

  const toggleLighting = () => {
    setLightingStatus(!lightingStatus);
    const status = lightingStatus ? 'éteint' : 'allumé';
    Alert.alert('Système d\'éclairage', `Le système d'éclairage est ${status}.`);
  };

  const handleIntensityChange = (value) => {
    setIntensity(value);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Système d'éclairage</Text>
      </View>
      <View style={styles.optionsContainer}>
        <Text style={styles.label}>Emplacement :</Text>
        <View style={styles.optionItem}>
          <TouchableOpacity onPress={() => handleLocationChange('Salon')} style={[styles.locationButton, selectedLocation === 'Salon' && styles.selectedLocationButton]}>
            <Text style={[styles.locationButtonText, selectedLocation === 'Salon' && styles.selectedLocationButtonText]}>Salon</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLocationChange('Chambre')} style={[styles.locationButton, selectedLocation === 'Chambre' && styles.selectedLocationButton]}>
            <Text style={[styles.locationButtonText, selectedLocation === 'Chambre' && styles.selectedLocationButtonText]}>Chambre</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLocationChange('Bureau')} style={[styles.locationButton, selectedLocation === 'Bureau' && styles.selectedLocationButton]}>
            <Text style={[styles.locationButtonText, selectedLocation === 'Bureau' && styles.selectedLocationButtonText]}>Bureau</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Couleur :</Text>
        <View style={styles.optionItem}>
          <TouchableOpacity onPress={() => handleColorChange('Blanc')} style={[styles.colorButton, selectedColor === 'Blanc' && styles.selectedColorButton]}>
            <Text style={[styles.colorButtonText, selectedColor === 'Blanc' && styles.selectedColorButtonText]}>Blanc</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleColorChange('Rouge')} style={[styles.colorButton, selectedColor === 'Rouge' && styles.selectedColorButton]}>
            <Text style={[styles.colorButtonText, selectedColor === 'Rouge' && styles.selectedColorButtonText]}>Rouge</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleColorChange('Rose')} style={[styles.colorButton, selectedColor === 'Rose' && styles.selectedColorButton]}>
            <Text style={[styles.colorButtonText, selectedColor === 'Rose' && styles.selectedColorButtonText]}>Rose</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleColorChange('Jaune')} style={[styles.colorButton, selectedColor === 'Jaune' && styles.selectedColorButton]}>
            <Text style={[styles.colorButtonText, selectedColor === 'Jaune' && styles.selectedColorButtonText]}>Jaune</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Intensité :</Text>
        <TextInput
          style={styles.intensityInput}
          value={String(intensity)}
          onChangeText={text => handleIntensityChange(parseInt(text) || 0)}
          keyboardType="numeric"
        />

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Éclairage</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={lightingStatus ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleLighting}
            value={lightingStatus}
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
  optionItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  locationButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  selectedLocationButton: {
    backgroundColor: '#81b0ff',
  },
  locationButtonText: {
    fontSize: 16,
  },
  selectedLocationButtonText: {
    color: '#fff',
  },
  colorButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  selectedColorButton: {
    backgroundColor: '#81b0ff',
  },
  colorButtonText: {
    fontSize: 16,
  },
  selectedColorButtonText: {
    color: '#fff',
  },
  intensityInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 16,
    marginRight: 10,
  },
});

export default LightingSystemPage;
