import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
//import PhotoPerfil from "../components/PhotoPefil";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import { logoutUser } from "../api/auth-api";

import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

import Constants from 'expo-constants';

const onPressLog = onPress = () => logoutUser();

const Dashboard = () => (

  <Background>
    <View style={styles.viewContainer}>
      <View style={styles.viewHeader}>
        {/* <PhotoPerfil/> */}
        <Text style={styles.nameText}>
          Maria Teste <Text style={styles.karmaText}>(+5)</Text>
        </Text>

        <TouchableOpacity onPress={onPressLog}>
          <Image style={styles.logoutImage} source={require('../assets/logout.png')} />
        </TouchableOpacity>
      </View>


      {/* <FlatList
         style={styles.incidentList}
         data={incidents}
         keyExtractor={incident => String(incident.id)}
         showsVerticalScrollIndicator={false}
         onEndReached={loadIncidents}
         onEndReachedThreshold={0.5}
         renderItem={({ item: incident }) => ( */}
          <View style={styles.postMarket}>
            <Text style={styles.postProperty}> Titulo: </Text>
            <Text style={styles.postValue}> Vende-se Árvore </Text>

            <Text style={styles.postProperty}> Descrição: </Text>
            <Text style={styles.postValue}> Estou vendendo uma Árvore (barato). </Text>

            <Text style={styles.postProperty}> VALOR: </Text>
            <Text style={styles.postValue}> R$ 350,00 </Text>

            <TouchableOpacity>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            </TouchableOpacity>
          </View>
        {/* }
      /> */}

    </View>
  </Background>
);


// ---- STYLES ---- //

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 3,
  },
  viewHeader: {
    margin: 0,
    width: '100%',
    height: 45,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    marginLeft: 15,
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
  },
  karmaText: {
    fontSize: 18,
    lineHeight: 24,
    color: '#0C0A0D',
  },
  logoutImage:{
    marginLeft: 200,
    marginRight: 5,
    width: 25,
    height: 25,
  },

  // posts

  postMarket:{
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  postProperty: {
      fontSize: 14,
      color: '#41414d',
      fontWeight: 'bold',
  },

  postValue: {
      marginTop: 8,
      fontSize: 15,
      marginBottom: 24,
      color: '#737380'
  },

  detailsButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center'
  },

  detailsButtonText: {
      color: '#2f55a4',
      fontSize: 15,
      fontWeight: 'bold'
  },
});

export default memo(Dashboard);