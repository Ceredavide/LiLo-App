import React from "react";
import { StyleSheet, View, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import LoadableImage from "../home/LoadableImage"
import IconWithText from "../shared/IconWithText"
import Tag from "./Tag"

import Colors from "../../constants/colors"

const HomeCard = ({ comunicazione }) => {

  const { titolo, sottotitolo, immagine } = comunicazione

  let tags = [
    {
      text: "Scuola",
      iconName: "school",
      color: "#70CCBD"
    },
    {
      text: "Ambiente",
      iconName: "leaf",
      color: "#5FBC51"
    }
  ]

  return (
    <View style={styles.container}>
      <View ew style={styles.card}>
        <View>
          <View style={styles.textRow}>
            <Text style={styles.title}>{titolo}</Text>
            <Text style={styles.subtitle}>{sottotitolo}</Text>
          </View>
          <View style={styles.tagRow}>
            <IconWithText
              iconName="calendar"
              text="15/08"
              iconSize={hp("2%")}
              fontSize={hp("1.6%")}
            />
            {tags.map(tag => <Tag tag={tag} />)}
          </View>
        </View>
        <LoadableImage immagine={immagine} />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
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
    padding: wp("2%"),
    borderRadius: 20,
    backgroundColor: Colors.white,
    shadowColor: Colors.white,
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
  textRow: {
    marginHorizontal: hp("4%"),
    marginLeft: wp("4%"),
    width: wp("52%")
  },
  tagRow: {
    height: hp('4.5%'),
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    paddingHorizontal: wp("4%")
  },
  title: {
    fontFamily: "open-sans-bold",
    marginBottom: hp("0.5%"),
    fontSize: hp("2.3%"),
  },
  subtitle: {
    fontFamily: "open-sans-regular",
    width: wp("55%")
  },

});

export default HomeCard;
