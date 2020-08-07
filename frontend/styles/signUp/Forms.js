import { StyleSheet } from "react-native";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from "react-native-responsive-screen";

export default styles = StyleSheet.create({
  form: {
    flex: 1
  },
  textInput: {
    width: wp("65%"),
    alignSelf: "center"
  }
});
