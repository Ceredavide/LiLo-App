import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { ProgressStep } from "react-native-progress-steps";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const Form3 = () => {
  return (
    <View style={styles.form}>
      <Image
        source={require("../../assets/images/login_successfull.jpg")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    alignItems: "center"
  },
  textInput: {
    height: hp("5%"),
    width: wp("70%"),
    padding: wp("3%"),
    fontSize: hp("2%"),
    marginBottom: hp("5%"),
    fontFamily: "open-sans-regular",
    borderBottomWidth: 1.5,
    borderBottomColor: "#009fff"
  }
});

export default Form3;
