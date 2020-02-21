import React from "react";
import {
  StyleSheet,
  ScrollView,
  RefreshControl,
  View,
  Text
} from "react-native";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const NoAssenze = ({ isLoading, loadAssenze }) => {
  return (
    <ScrollView style={styles.container} refreshControl={<RefreshControl refreshing={isLoading} onRefresh={loadAssenze} />}>
      <View style={styles.card}>
        <Text style={styles.emoji}>🤷🏻‍♂️</Text>
        <Text style={styles.text}>Non sono previste assenze</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  card: {
    marginTop: hp("20%"),
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: "open-sans-regular",
    fontSize: hp("3%")
  },
  emoji: {
    fontSize: hp("20%")
  }
});

export default NoAssenze;
