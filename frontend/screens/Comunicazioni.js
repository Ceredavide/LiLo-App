import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useSelector } from "react-redux"

import Screen from "../components/shared/Screen"
import MyButton from "../components/shared/MyButton";
import CardComunicazione from "../components/comunicazioni/CardComunicazione"

const ComunicazioniScreen = ({ navigation }) => {
  const comunicazioni = useSelector(state => state.comunicazioni.comunicazioni)

  function renderItem({ item }) {
    return (
      <CardComunicazione
        id={item._id}
        titolo={item.titolo}
        sottotitolo={item.sottotitolo}
        immagine={item.immagine}
        navigation={navigation}
      />
    )
  }

  return (
    <Screen>
      <MyButton
        action={() => navigation.navigate("Nuova Comunicazione")}
        text="Nuova Comunicazione"
        color="#1ed15a"
      />
      <FlatList
        data={comunicazioni}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 5,
    alignItems: "center",
    backgroundColor: "#F1F5F9"
  }
});

export default ComunicazioniScreen;