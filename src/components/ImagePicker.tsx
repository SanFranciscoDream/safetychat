import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';

import { Nullable } from '../base/types/BaseTypes';
import { IImage } from '../hooks/useImagePicker';
import { colors } from '../styles/colors';

interface ImagePickerProps {
  image: Nullable<IImage>;
  changeImage: () => void;
}

const ImagePicker = ({ image, changeImage }: ImagePickerProps) => {
  return (
    <>
      {image ? (
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={image} />
          <TouchableOpacity style={styles.imageTextWrapper} onPress={changeImage}>
            <Text style={styles.imageText}>Change avatar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.emptyImageWrapper} onPress={changeImage}>
          <Text style={styles.emptyImageText}>Add avatar</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  imageWrapper: {
    alignItems: 'center',
  },
  imageText: {
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    color: colors.secondary,
  },
  imageTextWrapper: {
    padding: 15,
  },
  emptyImageWrapper: {
    alignSelf: 'center',
    padding: 15,
    marginBottom: 20,
  },
  emptyImageText: {
    fontSize: 19,
    fontFamily: 'Roboto-Regular',
    color: colors.secondary,
    textTransform: 'uppercase',
  },
});
