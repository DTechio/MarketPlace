import React, { memo } from "react";
import Background from "../components/Background";
import PhotoPerfil from "../components/PhotoPerfil";
import Paragraph from "../components/Paragraph";
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';

import Carousel from '../components/Carousel'
import { dummyData } from '../data/Data'

import * as MailComposer from 'expo-mail-composer'

import styles from '../styles/DetailsStyle'
import { ScrollView } from "react-native-gesture-handler";
//import { Paragraph } from "react-native-paper";

const valorTemp = '500';
const message = `Olá "Comprador", estou entrando em contato pois gostaria de ajudar no caso "Produto" com o valor de 500,00`;
//const message = `Olá "Comprador", estou entrando em contato pois gostaria de ajudar no caso "Produto" com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valorTemp)}`;

function sendMail() {
    // MailComposer.composeAsync({
    //     subject: `Herói do caso: ${incident.title}`,
    //     recipients: [incident.email],
    //     body: message,
    // })
}

function sendWhatsapp() {
    //Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`)
}

const Details = ({ navigation }) => (

    <Background>
        <View style={styles.container}>
            <View style={styles.header}>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={28} color="#4e71ba" />
                </TouchableOpacity>
            </View>


        <ScrollView
            showsVerticalScrollIndicator = {false}>
            <View style={styles.incident}>

                <View style={styles.postNameView}>
                    <PhotoPerfil />
                    <Text style={styles.postName}>Maria Vendedora</Text>
                </View>

                <Text style={styles.postTitle}>Porrete de madeira</Text>

                <Text style={styles.postDesc}> Estou vendendo uma Árvore (barato). </Text>

                <Text style={styles.postLongDesc}> Árvore com poucos anos de uso. Ótimo Estado. Único dono. </Text>

                {/* <SLIDE @@@@@@@@@@@@ */}

                <View>

                    <Carousel data={dummyData} />

                </View>

                <Text style={styles.postValue1}>VALOR:</Text>
                <Text style={styles.postValue2}>
                    {/* {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(valorTemp)} */}
                500,00
            </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>
                    Contato:
                </Text>

                <Text style={styles.heroTitle}>
                    Entre com contato com o vendedor desse produto.
                </Text>

                <Text style={styles.heroDescription}>
                    Entre em contato:
                </Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>

            </View>
            </ScrollView>
        </View >
    </Background>
);

export default memo(Details);
