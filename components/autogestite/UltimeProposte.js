import React from "react";
import { StyleSheet, ScrollView, View, Text, ActivityIndicator, FlatList } from "react-native";
import { useSelector } from "react-redux"

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import CardProposta from "./CardProposta"

const UltimeProposte = () => {
  const isLoading = useSelector(state => state.proposte.loadingList)
  const proposte = useSelector(state => state.proposte.proposte)

  if (isLoading) {
    return <View style={styles.loadingContainer}>
      <ActivityIndicator />
    </View>
  } else {
    return <FlatList
      data={proposte}
      keyExtractor={item => item._id}
      renderItem={({ item }) =>
        <CardProposta isLoading={isLoading} proposta={item} />
      }
    />
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp("40%"),
    width: wp("95%"),
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center"
  },

});

export default UltimeProposte;
