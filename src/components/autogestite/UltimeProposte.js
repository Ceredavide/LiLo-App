import React from "react";
import { ActivityIndicator } from 'react-native'
import { useSelector } from "react-redux"

import CardProposta from "./CardProposta"

const UltimeProposte = () => {

  const isLoading = useSelector(state => state.proposte.loadingList)
  const proposte = useSelector(state => state.proposte.proposte)

  if (isLoading) return <ActivityIndicator />

  else return proposte.map((item, index) =>
    <CardProposta
      isLoading={isLoading}
      proposta={item}
      key={index}
    />
  )
};

export default UltimeProposte;
