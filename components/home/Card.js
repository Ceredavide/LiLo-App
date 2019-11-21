import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const HomeCard = ({ titolo, img, comunicazione }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{titolo}</Text>
      <Image
        style={styles.image}
        source={{
          uri:
            img +
            "#" +
            `${Math.random()
              .toString(36)
              .substring(2, 15) +
              Math.random()
                .toString(36)
                .substring(2, 15)}`
        }}
      />
      <Text style={styles.paragraph}>{comunicazione}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: wp("3%"),
    backgroundColor: "white",
    padding: wp("3%"),
    borderRadius: 20,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: hp("3%"),
    textAlign: "center"
  },
  paragraph: {
    fontFamily: "open-sans-regular",
    textAlign: "justify"
  },
  image: {
    height: 30,
    width: 40
  }
});

export default HomeCard;
