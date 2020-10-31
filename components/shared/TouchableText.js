import React from "react";
import { TouchableOpacity, Text } from "react-native";

const TouchableText = ({ text, action, textStyle, style }) => {
  return (
    <TouchableOpacity style={style} onPress={action}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TouchableText;
