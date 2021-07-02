import { useState } from 'react';
import ImagePicker from 'react-native-image-picker';

export interface IImage {
  uri: string;
  width: number;
  height: number;
  type: string | undefined;
}

export const useImagePicker = () => {
  const [image, setImage] = useState<IImage | null>(null);

  let options = {
    maxWidth: 500,
    maxHeight: 500,
    quality: 0.5,
  };

  const changeImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImage({
          type: response?.type,
          uri: response?.uri,
          width: response?.width,
          height: response?.height,
        });
      }
    });
  };

  const resetImage = () => {
    setImage(null);
  };

  return {
    image,
    changeImage,
    resetImage,
  };
};
