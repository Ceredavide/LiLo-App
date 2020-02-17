import { StyleSheet } from "react-native";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from "react-native-responsive-screen";

export default styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: hp("3%")
  },
  textInput: {
    height: hp("5%"),
    width: wp("70%"),
    alignSelf: "center",
    fontSize: hp("2%"),
    fontFamily: "open-sans-regular",
    borderBottomWidth: 1.5,
    borderBottomColor: "#009fff"
  }
});
