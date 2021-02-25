import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import IconWithText from "../shared/IconWithText"
import Tag from "./Tag"

import COLORS from "../../constants/COLORS"

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
            color={COLORS.black}
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
    width: wp("87%"),
    flex: 1,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    marginTop: hp("2%")
  },
  row: {
    paddingHorizontal: wp("9%"),
    paddingVertical: hp("1%"),
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
    color: COLORS.black,
    fontFamily: "open-sans-bold",
    marginBottom: hp("0.2%"),
    fontSize: hp("2.6%"),
  },
  subtitle: {
    color: COLORS.black,
    fontFamily: "open-sans-regular",
    marginBottom: hp("0.7%"),
    fontSize: hp("1.8%"),
  },
  image: {
    height: wp("40%"),
    width: wp("87%"),
    backgroundColor: "#323232",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },

});

export default HomeCard;
