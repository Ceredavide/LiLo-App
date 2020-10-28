import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import IconWithText from "../shared/IconWithText"
import Tag from "./Tag"

import Colors from "../../constants/colors"

const HomeCard = ({ comunicazione }) => {

  const { titolo, sottotitolo, tags, immagine, createdAt } = comunicazione

  return (
    <View ew style={styles.card}>
      <Image style={styles.image} source={{ uri: immagine }} />
      <View style={styles.row}>
        <Text style={styles.title}>{titolo}</Text>
        <Text style={styles.subtitle}>{sottotitolo}</Text>
        <View style={styles.tagRow}>
          <IconWithText
            iconName="calendar"
            text={createdAt}
            iconSize={hp("2%")}
            fontSize={hp("1.6%")}
            color={Colors.white}
          />
          {tags.map((tag, index) => <Tag tag={tag} key={index} />)}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    width: wp("85%"),
    flex: 1,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#4a86ff"
  },
  row: {
    paddingHorizontal: wp("9%"),
    paddingVertical: hp("2%"),
    width: wp("90%"),
    justifyContent: "space-evenly"
  },
  tagRow: {
    height: hp('4%'),
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center"
  },
  title: {
    color: Colors.white,
    fontFamily: "open-sans-bold",
    marginBottom: hp("0.5%"),
    fontSize: hp("2.6%"),
  },
  subtitle: {
    color: Colors.white,
    fontFamily: "open-sans-regular",
    fontSize: hp("1.8%"),
  },
  image: {
    height: wp("42%"),
    width: wp("85%"),
    backgroundColor: "#FFF",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },

});

export default HomeCard;