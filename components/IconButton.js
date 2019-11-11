import React from "react";
import { TouchableOpacity } from "react-native";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

const IconButton = ({ name, action, color, style }) => {
  return (
    <TouchableOpacity onPress={action} style={style}>
      <AntDesign name={name} size={hp("4%")} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
