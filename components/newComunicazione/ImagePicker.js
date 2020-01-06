import React, { useState, useEffect } from "react";
import { Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

const ImagePickerExample = ({ image, setFieldValue }) => {
  const [imgUri, setImgUri] = useState("mamacita")
  useEffect(() => {
    getPermissionAsync();
  }, []);

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      aspect: [16, 9],
      quality: 1
    });
    if (!result.cancelled) {
      setFieldValue("image", result.base64);
      setImgUri(result.uri)
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Seleziona un'immagine" onPress={_pickImage} />
      {
        <Image
          source={{ uri: imgUri }}
          style={{ width: 200, height: 200 }}
        />
      }
    </View>
  );
};

export default ImagePickerExample;
