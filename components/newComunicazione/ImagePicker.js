import React, { useEffect } from "react";
import { Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

const ImagePickerExample = ({ image, setFieldValue }) => {
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
      aspect: [16, 9],
      quality: 1
    });

    if (!result.cancelled) {
      setFieldValue("image", result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={_pickImage} />
      {
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200 }}
        />
      }
    </View>
  );
};

export default ImagePickerExample;
