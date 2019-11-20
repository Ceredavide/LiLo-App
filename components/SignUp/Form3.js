import React from "react";
import { View, Image } from "react-native";

import styles from "../../styles/signUp/Forms"

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

export default Form3;
