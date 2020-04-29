import React, { memo } from "react";
import Background from "../components/Background";
import PhotoPerfil from "../components/PhotoPerfil";
import Header2 from "../components/Header2";
import { logoutUser } from "../api/auth-api";

import styles from "../styles/DashboardStyle";

import { Feather } from '@expo/vector-icons';

import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';

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
            <PhotoPerfil/>
            <Text style={styles.postName}> Mario Teste </Text>
          </View>

          <Text style={styles.postTitle}> Vende-se Árvore </Text>

          <Text style={styles.postDesc}> Estou vendendo uma Árvore (barato). </Text>

          <Image source={require('../assets/logo.png')} style={styles.productImage}/>

          <Text style={styles.postValue1}> VALOR: </Text>
          <Text style={styles.postValue2}> R$ 350,00 </Text>

          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#4e71ba" />
          </TouchableOpacity>

        </View>

        <View style={styles.postMarket}>

          <View style={styles.postNameView}>
            <PhotoPerfil/>
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
            <PhotoPerfil/>
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
            <PhotoPerfil/>
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
            <PhotoPerfil/>
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

export default memo(Dashboard);