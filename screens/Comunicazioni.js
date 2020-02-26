import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useSelector } from "react-redux"

import MyButton from "../components/MyButton";
import CardComunicazione from "../components/comunicazioni/CardComunicazione"

const ComunicazioniScreen = ({ navigation }) => {
  const comunicazioni = useSelector(state => state.comunicazioni.comunicazioni)
  return (
    <View style={styles.screen}>
      <MyButton
        action={() => navigation.navigate("Nuova Comunicazione")}
        text="Nuova Comunicazione"
        color="#1ed15a"
      />
      <FlatList
        data={comunicazioni}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          <CardComunicazione
            id={item._id}
            titolo={item.titolo}
            sottotitolo={item.sottotitolo}
            immagine={item.immagine} />
        }
      />
    </View>
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