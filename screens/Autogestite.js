import React, { useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux"

import { fetchProposte } from "../store/actions/proposte"

import ChartProposte from "../components/autogestite/ChartProposte";
import UltimeProposte from "../components/autogestite/UltimeProposte";
import MyButton from "../components/MyButton";

const AutogestiteScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.proposte.loadingList)
  const proposte = useSelector(state => state.proposte.proposte)
  
  useEffect(() => {
    dispatch(fetchProposte())
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.cardContainer}>
        <MyButton
          action={() => navigation.navigate("Proposta")}
          text="Proponi un'attività"
          color="#009fff"
        />
        <ChartProposte isLoading={isLoading} proposte={proposte} />
        <UltimeProposte isLoading={isLoading} proposte={proposte} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009fff"
  },
  cardContainer: {
    flex: 1,
    padding: 5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#F1F5F9"
  }
});

export default AutogestiteScreen;
