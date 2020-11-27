import React, { useEffect } from "react";
import { Button, Image, View, StyleSheet } from "react-native";
import * as ImgPicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const ImagePicker = ({ immagine, setFieldValue }) => {
  useEffect(() => {
    // Richiedo i permessi per accedere alla galleria e fare foto
    const getPermissionAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== "granted") {
          alert("Devi accettare i permessi per accedere alla tua fotocamera per poter caricare delle foto.");
        }
      }
    };

    getPermissionAsync();
  }, []);

  async function _pickImage() {
    const result = await ImgPicker.launchImageLibraryAsync({
      mediaTypes: ImgPicker.MediaTypeOptions.Images,
      base64: true,
      aspect: [16, 9],
      quality: 1,
      allowsEditing: true
    });
    if (!result.cancelled) {
      setFieldValue("immagine", 'data:image/jpeg;base64,' + result.base64);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Seleziona un'immagine" onPress={_pickImage} color="#FFFF" />
      { immagine &&
        <>
          < Image
            source={{ uri: immagine }}
            style={styles.image}
          />
          <Button title="Rimuovi" onPress={() => setFieldValue("immagine", null)} color="red" />
        </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    marginTop: hp("5%"),
    alignSelf: "center",
    width: wp("80%"),
    height: hp("30%"),
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2
  },
  image: {
    marginTop: hp("3%"),
    alignSelf: "center",
    backgroundColor: "white",
    width: wp("80%"),
    height: wp("80%")
  }
})

export default ImagePicker;