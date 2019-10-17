import React from "react";
import { View, Text, Image } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const AutogestiteScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: hp("4%") }}>Lui ride, io no</Text>
    </View>
  );
};

export default AutogestiteScreen;
