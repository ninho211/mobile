import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure to install react-native-vector-icons

const App = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} // Replace with your image URL
          style={styles.profilePic}
        />
        <Text style={styles.greeting}>Bonjour, Nina</Text>
        <View style={styles.houseSelector}>
          <Icon name="home-outline" size={24} />
          <Text style={styles.houseText}>Maison 1</Text>
          <Icon name="chevron-down-outline" size={24} />
        </View>
      </View>
      <View style={styles.gridContainer}>
        <View style={styles.grid}>
          {/* Repeat this block for each item */}
          <TouchableOpacity style={styles.gridItem }            
          onPress={() => navigation.navigate('Controle')}
>
            <Icon name="shield-checkmark-outline" size={28} style={styles.icon} />
            <Text style={styles.gridText}>Contrôle d’accés</Text>
            <Text style={styles.gridSubText}>4 personne on l'accés</Text>
          </TouchableOpacity>
          {/* ... other grid items ... */}
        </View>

        <View style={styles.grid}>
          {/* Repeat this block for each item */}
          <TouchableOpacity style={styles.gridItem } onPress={() => navigation.navigate('LightingSystemPage')} >
            <Icon name="shield-checkmark-outline" size={28} style={styles.icon} />
            <Text style={styles.gridText}>Système d’éclairage</Text>
            <Text style={styles.gridSubText}>72%</Text>
          </TouchableOpacity>
          {/* ... other grid items ... */}
        </View>
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.grid}>
          {/* Repeat this block for each item */}
          <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('TemperatureControlPage')} >
            <Icon name="shield-checkmark-outline" size={28} style={styles.icon} />
            <Text style={styles.gridText}>Contrôle température </Text>
            <Text style={styles.gridSubText}>26°C</Text>
          </TouchableOpacity>
          {/* ... other grid items ... */}
        </View>

        <View style={styles.grid}>
          {/* Repeat this block for each item */}
          <TouchableOpacity style={styles.gridItem}  onPress={() => navigation.navigate('SecurityPage')} >
            <Icon name="shield-checkmark-outline" size={28} style={styles.icon} />
            <Text style={styles.gridText}>Système de sécurité</Text>
            <Text style={styles.gridSubText}>Tout est en sécurité</Text>
          </TouchableOpacity>
          {/* ... other grid items ... */}
        </View>
    
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.grid}>
          {/* Repeat this block for each item */}
          <TouchableOpacity style={styles.gridItem}  onPress={() => navigation.navigate('Wifi')} >
            <Icon name="shield-checkmark-outline" size={28} style={styles.icon} />
            <Text style={styles.gridText}>Wifi</Text>
            <Text style={styles.gridSubText}>On</Text>
          </TouchableOpacity>
          {/* ... other grid items ... */}
        </View>

        <View style={styles.grid}>
          {/* Repeat this block for each item */}
          <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('Store')}>
            <Icon name="shield-checkmark-outline" size={28} style={styles.icon} />
            <Text style={styles.gridText}>Store</Text>
            <Text style={styles.gridSubText}>Fermé</Text>
          </TouchableOpacity>
          {/* ... other grid items ... */}
        </View>
    
      </View>
      <View style={styles.gridContainer}>
        <View style={styles.grid}>
          {/* Repeat this block for each item */}
          <TouchableOpacity style={styles.gridItem}>
            <Icon name="shield-checkmark-outline" size={28} style={styles.icon} />
            <Text style={styles.gridText}>Multimédia </Text>
            <Text style={styles.gridSubText}>Smart TV, système audio</Text>
          </TouchableOpacity>
          {/* ... other grid items ... */}
        </View>

        <View style={styles.grid}>
          {/* Repeat this block for each item */}
          <TouchableOpacity style={styles.gridItem}>
            <Icon name="shield-checkmark-outline" size={28} style={styles.icon} />
            <Text style={styles.gridText}>Système de sécurité</Text>
            <Text style={styles.gridSubText}>Tout est en sécurité</Text>
          </TouchableOpacity>
          {/* ... other grid items ... */}
        </View>
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.grid}>
          {/* Repeat this block for each item */}
          <TouchableOpacity style={styles.gridItem}>
            <Icon name="shield-checkmark-outline" size={28} style={styles.icon} />
            <Text style={styles.gridText}>Électroménager</Text>
            <Text style={styles.gridSubText}>OFF</Text>
          </TouchableOpacity>
          {/* ... other grid items ... */}
        </View>

        <View style={styles.grid}>
          {/* Repeat this block for each item */}
          <TouchableOpacity style={styles.gridItem}>
            <Icon name="shield-checkmark-outline" size={28} style={styles.icon} />
            <Text style={styles.gridText}>Voiture</Text>
            <Text style={styles.gridSubText}>75%</Text>
          </TouchableOpacity>
          {/* ... other grid items ... */}
        </View>
    
      </View>
    </ScrollView>
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
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  houseSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    padding: 10,
  },
  houseText: {
    marginHorizontal: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
    width: '48%', // Take half of the container width with a little padding adjustment
  },
  gridItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%', // Take full width of the grid container
  },
  icon: {
    marginBottom: 10,
  },
  gridText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  gridSubText: {
    fontSize: 12,
    color: '#666',
  },
  // Add additional styles as needed
});

export default App;
