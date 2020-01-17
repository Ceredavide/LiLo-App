import React from "react";
import { FlatList } from "react-native";

import CardComunicazione from "./CardComunicazione";

const ListComunicazioni = ({ comunicazioni }) => {
  return (
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
  );
};

export default ListComunicazioni;
