import React from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const HomeCard = ({img, titolo, sottotitolo, paragrafo }) => {
  return (
    <TouchableOpacity style={styles.card}>
      {/* <Image style={styles.image} source={{ uri: img }} /> */}
      <View style={styles.containerText}>
        <Text style={styles.title}>{titolo}</Text>
        <Text style={styles.subtitle}>{sottotitolo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: wp("2%"),
    width: wp("92%"),
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image: {
    height: hp("12%"),
    width: hp("12%"),
    margin: wp("2.5%"),
    borderRadius: 20,
  },
  containerText:{
    flex: 1 ,  //width (according to its parent)
    justifyContent: 'center',
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: hp("2.5%"),
  },
  subtitle: {
    fontFamily: "open-sans-regular",
    padding: wp("2%"),
  }
});

export default HomeCard;
