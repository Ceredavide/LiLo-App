import React from "react";
import { FlatList } from "react-native";

import CardComunicazione from "./CardComunicazione";

const ListComunicazioni = ({ comunicazioni }) => {
  return (
    <FlatList
      data={comunicazioni}
      keyExtractor={item => item._id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <CardComunicazione titolo={item.titolo} sottotitolo={item.sottotitolo} />
      }
    />
  );
};

export default ListComunicazioni;
