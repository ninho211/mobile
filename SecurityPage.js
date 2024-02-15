import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assurez-vous d'avoir installé react-native-vector-icons

const SecurityPage = () => {
  const [securityStatus, setSecurityStatus] = useState(false);
  const [motionDetection, setMotionDetection] = useState(false);
  const [doorSensor, setDoorSensor] = useState(false);

  const toggleSecurity = () => {
    setSecurityStatus(!securityStatus);
    const status = securityStatus ? 'désactivée' : 'activée';
    Alert.alert('Système de sécurité', `La sécurité est ${status}.`);
  };

  const toggleMotionDetection = () => {
    setMotionDetection(!motionDetection);
    const status = motionDetection ? 'désactivée' : 'activée';
    Alert.alert('Détection de mouvement', `La détection de mouvement est ${status}.`);
  };

  const toggleDoorSensor = () => {
    setDoorSensor(!doorSensor);
    const status = doorSensor ? 'désactivé' : 'activé';
    Alert.alert('Capteur de porte', `Le capteur de porte est ${status}.`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sécurité</Text>
      </View>
      <View style={styles.optionsContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Système de sécurité</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={securityStatus ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSecurity}
            value={securityStatus}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Détection de mouvement</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={motionDetection ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleMotionDetection}
            value={motionDetection}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Capteur de porte</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={doorSensor ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleDoorSensor}
            value={doorSensor}
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

export default SecurityPage;