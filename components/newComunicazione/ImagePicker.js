import React, { useState, useEffect } from "react";
import { Button, Image, View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const ImagePickerExample = ({ setFieldValue }) => {
  const [imgUri, setImgUri] = useState("mamacita")
  useEffect(() => {
    getPermissionAsync();
  }, []);

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Devi accettare i permessi per accedere alla tua fotocamera per poter caricare delle foto.");
      }
    }
  };

  _pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      aspect: [16, 9],
      quality: 1,
      allowsEditing: true
    });
    if (!result.cancelled) {
      setFieldValue("image", result.base64);
      setImgUri(result.uri)
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Seleziona un'immagine" onPress={_pickImage} />
      {
        <Image
          source={{ uri: imgUri }}
          style={styles.image}
        />
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
    height: hp("35%")
  }
})

export default ImagePickerExample;
