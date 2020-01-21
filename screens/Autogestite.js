import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, RefreshControl, Text } from "react-native";
import { useDispatch } from "react-redux"

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
      style={styles.container}
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl
        refreshing={isRefreshing}
        onRefresh={() => handleRefresh()}
      />}>
      <Text style={styles.title}>Classi con maggiori proposte:</Text>
      <ChartProposte />
      <Text style={styles.title}>Ultime attività proposte:</Text>
      <UltimeProposte />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#F1F5F9"
  },
  title: {
    marginTop: hp("2%"),
    fontSize: hp("2.5%"),
    fontFamily: "open-sans-regular",
    paddingLeft: wp("3%")
  }
});

export default AutogestiteScreen;
