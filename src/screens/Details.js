import React, { memo } from "react";
import Background from "../components/Background";
import PhotoPerfil from "../components/PhotoPerfil";
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';

import * as MailComposer from 'expo-mail-composer'

import styles from '../styles/DetailsStyle'

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

        <View style={styles.incident}>

        <View style={styles.postNameView}>
            <PhotoPerfil />
            <Text style={styles.postName}>Maria Vendedora</Text>
        </View>

            <Text style={styles.postTitle}>Porrete de madeira</Text>

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
        </View >
    </Background>
);

export default memo(Details);
