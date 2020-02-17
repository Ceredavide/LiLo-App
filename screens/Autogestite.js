import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, RefreshControl, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux"

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { fetchProposte } from "../store/actions/proposte"

import ChartProposte from "../components/autogestite/ChartProposte";
import UltimeProposte from "../components/autogestite/UltimeProposte";

const AutogestiteScreen = () => {
  const dispatch = useDispatch()
  const [isRefreshing, setIsRefreshing] = useState(false)

  const nProposte = useSelector(state => state.proposte.nProposte)

  handleRefresh = () => {
    setIsRefreshing(true)
    dispatch(fetchProposte())
    setIsRefreshing(false)
  }

  useEffect(() => {
    dispatch(fetchProposte())
  }, []);

  return (
    <ScrollView
      style={styles.screen}
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl
        refreshing={isRefreshing}
        onRefresh={() => handleRefresh()}
      />}>
      <View style={styles.numberContainer}>
        <Text style={styles.title}>Numero di proposte fatte:</Text>
        <Text style={styles.number}>{nProposte}</Text>
      </View>
      <Text style={styles.title}>Classi con maggiori proposte:</Text>
      <ChartProposte />
      <Text style={styles.title}>Ultime attività proposte:</Text>
      <UltimeProposte />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 5,
    backgroundColor: "#F1F5F9"
  },
  title: {
    marginTop: hp("2%"),
    fontSize: hp("2.5%"),
    fontFamily: "open-sans-regular",
    paddingLeft: wp("3%"),
  },
  number: {
    marginTop: hp("2%"),
    fontSize: hp("3%"),
    fontFamily: "open-sans-regular",
    paddingLeft: wp("3%"),
    color: "#009fff"
  },
  numberContainer: {
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center"
  }
});

export default AutogestiteScreen;
