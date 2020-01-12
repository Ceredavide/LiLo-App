import { StyleSheet } from "react-native";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from "react-native-responsive-screen";

export default styles = StyleSheet.create({
  form: {
    alignSelf: "center"
  },
  textInput: {
    height: hp("5%"),
    width: wp("70%"),
    paddingLeft: wp("3%"),
    fontSize: hp("2%"),
    marginBottom: hp("5%"),
    fontFamily: "open-sans-regular",
    borderBottomWidth: 1.5,
    borderBottomColor: "#009fff"
  }
});
