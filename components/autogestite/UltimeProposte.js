import React from "react";
import { useSelector } from "react-redux"

import CardProposta from "./CardProposta"
import ProposteHolder from "./ProposteHolder"

const UltimeProposte = () => {

  const isLoading = useSelector(state => state.proposte.loadingList)
  const proposte = useSelector(state => state.proposte.proposte)

  if (isLoading) return <ProposteHolder />

  else return proposte.map((item, index) =>
    <CardProposta
      isLoading={isLoading}
      proposta={item}
      key={index}
    />
  )
};

export default UltimeProposte;
