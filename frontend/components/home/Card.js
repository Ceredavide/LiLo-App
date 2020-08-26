import React from "react";
import { StyleSheet, View, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import LoadableImage from "../home/LoadableImage"

const HomeCard = ({ comunicazione }) => {

  const { titolo, sottotitolo, immagine } = comunicazione

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.containerText}>
          <Text style={styles.title}>{titolo}</Text>
          <Text style={styles.subtitle}>{sottotitolo}</Text>
        </View>
        <LoadableImage immagine={immagine} />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container:{
    width: wp("100%"),
    alignItems: "center",
    padding: hp("1%"),
    marginTop: hp("0.5%")
  },
  card: {
    width: wp("90%"),
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "#FFF",
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    
    elevation: 10,
  },
  image: {
    height: hp("8%"),
    width: hp("8%"),
    borderRadius: 20,
    marginRight: wp("3%")
  },
  containerText: {
    marginHorizontal: hp("4%"),
    marginLeft: wp("4%"),
    width: wp("47%")
  },
  title: {
    fontFamily: "open-sans-bold",
    marginBottom: hp("1%"),
    fontSize: hp("2.3%"),
  },
  subtitle: {
    fontFamily: "open-sans-regular",
    width: wp("55%")
  }
});

export default HomeCard;
