import React from "react";
import { TouchableOpacity } from "react-native";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

const IconButton = ({ name, action }) => {
  return (
    <TouchableOpacity onPress={action}>
      <AntDesign name={name} size={hp("4%")} color="white" />
    </TouchableOpacity>
  );
};

export default IconButton;
