import React from "react";
import { StyleSheet, View, Image } from "react-native";

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
    alignItems: "center", 
    justifyContent: "center"
  },
  image:{
    height: hp("60%"),
    width: wp("90%")
  }
})

export default Form3;
