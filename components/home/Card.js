import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import LoadableImage from "./LoadableImage"

const HomeCard = ({ immagine, titolo, sottotitolo }) => {
  return (
    <View style={styles.container}>
      <LoadableImage immagine={immagine} />
      <View style={styles.containerText}>
        <Text style={styles.title}>{titolo}</Text>
        <Text style={styles.subtitle}>{sottotitolo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: wp("92%"),
    marginTop: hp("1.5%"),
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
  container: {
    flex: 1,
    flexDirection: "row",
    width: wp("92%"),
    marginTop: hp("1.5%"),
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
  containerText: {
    marginTop: wp("4%"),
    marginBottom: wp("4%"),
    marginRight: wp("4%")
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: hp("2%"),
  },
  subtitle: {
    fontFamily: "open-sans-regular",
    padding: wp("2%"),
  }
});

export default HomeCard;
