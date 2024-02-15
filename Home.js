import React from 'react';
import {ImageBackground, StyleSheet, Text, View,TouchableOpacity} from 'react-native';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground source={require('./1.png')} resizeMode="cover" style={styles.image}>
                <Text style={styles.headerText}>Contrôlez votre maison</Text>
                <Text style={styles.subHeaderText}>Découvrez les avantages de la gestion intelligente de la maison</Text>
            <TouchableOpacity style={styles.button}        
             onPress={() => navigation.navigate('Homescreen')}
>
                <Text style={styles.buttonText}>COMMENCER</Text>
            </TouchableOpacity>
            </ImageBackground>

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    },

  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },

  header: {
           alignItems: 'center',
           marginBottom: 20,
           
           
       },

      headerText: {
           fontSize: 22,
           fontWeight: 'bold',
           color: '#333',
           textAlign: 'center',
           paddingTop : 400,
        
          

       },
       subHeaderText: {
          fontSize: 16,
          color: '#666',
           textAlign: 'center',
           paddingHorizontal: 30,
           padding: 20,
           
       },
      button: {
          backgroundColor: '#007bff',
          paddingVertical: 15,
          paddingHorizontal: 35,
          borderRadius: 25,
          width:193,
          justifyContent: 'center',
          alignSelf: 'center',
          
      },

        buttonText: {
          color: '#ffffff',
          fontSize: 18,
          fontWeight: 'bold', 
      },


});

export default Home;


