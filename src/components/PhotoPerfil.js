import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const PhotoPerfil = () => (
  <Image source={require('../assets/perfil.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    marginLeft: 0,
    width: 30,
    height: 30,
    borderRadius: 200,
    borderWidth: 0.5,
    borderColor: '#000',
  },
});

export default memo(PhotoPerfil);