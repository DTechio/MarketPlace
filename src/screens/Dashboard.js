import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
//import PhotoPerfil from "../components/PhotoPefil";
import Header2 from "../components/Header2";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import { logoutUser } from "../api/auth-api";

import { Feather } from '@expo/vector-icons';

import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

import Constants from 'expo-constants';
import { ScrollView } from "react-native-gesture-handler";

const onPressLog = onPress = () => logoutUser();

const Dashboard = () => (

  <Background>
    <View style={styles.viewContainer}>

      {/* /// HEADER /// */}


      <Header2>

        <Image source={require('../assets/perfil.png')} style={styles.perfilImage} />
        <Text style={styles.nameText}>
          Maria Teste <Text style={styles.karmaText}>(+8)</Text>
        </Text>

        <TouchableOpacity onPress={onPressLog}>
          <Image style={styles.logoutImage} source={require('../assets/logout.png')} />
        </TouchableOpacity>

      </Header2>

      {/* /// POSTS /// */}

      {/* <FlatList
         style={styles.incidentList}
         data={incidents}
         keyExtractor={incident => String(incident.id)}
         showsVerticalScrollIndicator={false}
         onEndReached={loadIncidents}
         onEndReachedThreshold={0.5}
         renderItem={({ item: incident }) => ( */}
      <ScrollView>

        <View style={styles.postMarket}>

          <View style={styles.postNameView}>
            <Image source={require('../assets/perfil.png')} style={styles.perfilImage2} />
            <Text style={styles.postName}> Mario Teste </Text>
          </View>

          <Text style={styles.postTitle}> Vende-se Árvore </Text>

          <Text style={styles.postProperty}> Descrição: </Text>
          <Text style={styles.postValue}> Estou vendendo uma Árvore (barato). </Text>

          <Text style={styles.postProperty}> VALOR: </Text>
          <Text style={styles.postValue}> R$ 350,00 </Text>

          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#4e71ba" />
          </TouchableOpacity>

        </View>

        <View style={styles.postMarket}>

          <View style={styles.postNameView}>
            <Image source={require('../assets/perfil.png')} style={styles.perfilImage2} />
            <Text style={styles.postName}> Mario Teste </Text>
          </View>

          <Text style={styles.postTitle}> Vende-se Árvore </Text>

          <Text style={styles.postProperty}> Descrição: </Text>
          <Text style={styles.postValue}> Estou vendendo uma Árvore (barato). </Text>

          <Text style={styles.postProperty}> VALOR: </Text>
          <Text style={styles.postValue}> R$ 350,00 </Text>

          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#4e71ba" />
          </TouchableOpacity>

        </View>

        <View style={styles.postMarket}>

          <View style={styles.postNameView}>
            <Image source={require('../assets/perfil.png')} style={styles.perfilImage2} />
            <Text style={styles.postName}> Mario Teste </Text>
          </View>

          <Text style={styles.postTitle}> Vende-se Árvore </Text>

          <Text style={styles.postProperty}> Descrição: </Text>
          <Text style={styles.postValue}> Estou vendendo uma Árvore (barato). </Text>

          <Text style={styles.postProperty}> VALOR: </Text>
          <Text style={styles.postValue}> R$ 350,00 </Text>

          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#4e71ba" />
          </TouchableOpacity>

        </View>

        <View style={styles.postMarket}>

          <View style={styles.postNameView}>
            <Image source={require('../assets/perfil.png')} style={styles.perfilImage2} />
            <Text style={styles.postName}> Mario Teste </Text>
          </View>

          <Text style={styles.postTitle}> Vende-se Árvore </Text>

          <Text style={styles.postProperty}> Descrição: </Text>
          <Text style={styles.postValue}> Estou vendendo uma Árvore (barato). </Text>

          <Text style={styles.postProperty}> VALOR: </Text>
          <Text style={styles.postValue}> R$ 350,00 </Text>

          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#4e71ba" />
          </TouchableOpacity>

        </View>

        <View style={styles.postMarket}>

          <View style={styles.postNameView}>
            <Image source={require('../assets/perfil.png')} style={styles.perfilImage2} />
            <Text style={styles.postName}> Mario Teste </Text>
          </View>

          <Text style={styles.postTitle}> Vende-se Árvore </Text>

          <Text style={styles.postProperty}> Descrição: </Text>
          <Text style={styles.postValue}> Estou vendendo uma Árvore (barato). </Text>

          <Text style={styles.postProperty}> VALOR: </Text>
          <Text style={styles.postValue}> R$ 350,00 </Text>

          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#4e71ba" />
          </TouchableOpacity>

        </View>

      </ScrollView>

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

  // images

  perfilImage: {
    marginLeft: 20,
    width: 30,
    height: 30,
    borderRadius: 200,
    borderWidth: 0.5,
    borderColor: '#000',
  },

  perfilImage2: {
    marginLeft: 0,
    width: 30,
    height: 30,
    borderRadius: 200,
    borderWidth: 0.5,
    borderColor: '#000',
  },

  logoutImage: {
    marginLeft: 150,
    marginRight: 8,
    width: 25,
    height: 25,
  },

  // posts

  postMarket: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  postNameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  postName: {
    marginLeft: 5,
    fontSize: 14,
    color: '#737380',
    fontWeight: 'bold',
  },

  postProperty: {
    fontSize: 14,
    color: '#737380',
    fontWeight: 'bold',
  },

  postTitle: {
    marginTop: 12,
    marginBottom: 12,
    justifyContent: 'center',
    fontSize: 18,
    color: '#41414d',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  postValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  detailsButtonText: {
    marginRight: 20,
    color: '#2f55a4',
    fontSize: 15,
    fontWeight: 'bold'
  },
});

export default memo(Dashboard);