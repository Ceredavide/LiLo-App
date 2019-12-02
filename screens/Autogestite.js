import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

import ChartProposte from "../components/autogestite/ChartProposte";
import UltimeProposte from "../components/autogestite/UltimeProposte";
import MyButton from "../components/MyButton";

import { fetchProposte } from "../store/actions/proposte";

const AutogestiteScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProposte());
  });

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <ChartProposte />
        <UltimeProposte />
        <MyButton
          action={() => navigation.navigate("Proposta")}
          text="Proponi un'attività"
          color="#009fff"
        />
      </View>
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
    alignItems: "center",
    backgroundColor: "#F1F5F9"
  }
});

export default AutogestiteScreen;
