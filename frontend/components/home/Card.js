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
              text={createdAt}
              iconSize={hp("2%")}
              fontSize={hp("1.6%")}
              color={Colors.white}
            />
            {tags.map((tag, index) => <Tag tag={tag} key={index} />)}
          </View>
        </View>
        <Image style={styles.image} source={{ uri: immagine }} />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    alignItems: "center",
    padding: hp("1%"),
    marginTop: hp("0.5%"),
    minHeight: hp("18%")
  },
  card: {
    alignSelf: 'center',
    width: wp("90%"),
    height: hp("15%"),
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "#4a86ff",
    shadowColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  textRow: {
    marginHorizontal: hp("3%"),
    marginLeft: wp("4%"),
    width: wp("52%")
  },
  tagRow: {
    height: hp('4%'),
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    paddingHorizontal: wp("4%")
  },
  title: {
    color: Colors.white,
    fontFamily: "open-sans-bold",
    marginBottom: hp("0.5%"),
    fontSize: hp("2.3%"),
  },
  subtitle: {
    color: Colors.white,
    fontFamily: "open-sans-regular",
    width: wp("55%")
  },
  image: {
    height: hp("16%"),
    width: hp("16%"),
    backgroundColor: "#FFF",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },

});

export default HomeCard;
