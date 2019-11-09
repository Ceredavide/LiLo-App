import React, { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";

import FormProposta from "../components/proposta/FormProposta";
import TabHeader from "../components/TabHeader";


const PropostaScreen = ({ navigation }) => {
  const [proposta, setProposta] = useState({});

  return (
    <SafeAreaView style={styles.container}>
      <TabHeader title="Proposta" />
      <ScrollView style={styles.card}>
        <FormProposta setProposta={setProposta} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009fff"
  },
  card: {
    flex: 1,
    padding: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    backgroundColor: "#F1F5F9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1
  }
});

export default PropostaScreen;