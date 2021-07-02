import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export enum ImageType {
  SETTINGS = 'settings',
  AUTH = 'auth',
}

interface ScreenImageProps {
  type: ImageType;
}

const ScreenImage = ({ type }: ScreenImageProps) => {
  const renderImage = () => {
    switch (type) {
      case ImageType.AUTH:
        return require('../assets/images/hellosmurph.png');

      case ImageType.SETTINGS:
        return require('../assets/images/settingsmurph.png');
    }
  };

  return (
    <View style={styles.imageWrapper}>
      <Image style={styles.image} source={renderImage()} />
    </View>
  );
};

export default ScreenImage;

const styles = StyleSheet.create({
  imageWrapper: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
    marginTop: 30,
  },

  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
});
