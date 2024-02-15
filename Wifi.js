import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assurez-vous d'avoir installé react-native-vector-icons

const Wifi = () => {
  const [wifiStatus, setWifiStatus] = useState(true);

  const toggleWifi = () => {
    setWifiStatus(!wifiStatus);
    const status = wifiStatus ? 'désactivé' : 'activé';
    Alert.alert('Wi-Fi', `Le Wi-Fi est ${status}.`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Wi-Fi</Text>
      </View>
      <View style={styles.optionsContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Wi-Fi</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={wifiStatus ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleWifi}
            value={wifiStatus}
          />
        </View>
        {/* Ajouter d'autres options de gestion du Wi-Fi ici */}
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

export default Wifi;
