import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux"

import CardProposta from "./CardProposta"
import ProposteHolder from "./ProposteHolder"

const UltimeProposte = () => {
  const isLoading = useSelector(state => state.proposte.loadingList)
  const proposte = useSelector(state => state.proposte.proposte)

  if (isLoading) {
    return <ProposteHolder />
  } else {
    return (
      <FlatList
        data={proposte}
        keyExtractor={item => item._id}
        renderItem={({ item }) =>
          <CardProposta isLoading={isLoading} proposta={item} />
        }
      />
    )
  }
};

export default UltimeProposte;
