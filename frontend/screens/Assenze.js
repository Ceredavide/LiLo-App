import React from "react";
import { SectionList, ActivityIndicator } from "react-native";

import useAssenze from "../hooks/useAssenze"

import Error from "./Error"
import Screen from "../components/shared/Screen"
import TransitionView from "../components/shared/TransitionView"
import Header from "../components/assenze/Header";
import CardAssenza from "../components/assenze/CardAssenza";
import NoAssenze from "../components/assenze/NoAssenze";

const AssenzeScreen = () => {

  const {
    assenze,
    isLoading,
    isRefreshing,
    handleRefresh
  } = useAssenze()

  function renderItem({ item, index }) {
    console.log(item)
    return (
      <TransitionView index={index} >
        <CardAssenza
          key={index}
          nome={item.nome + " " + item.cognome}
          descrizione={item.motivo}
        />
      </TransitionView>
    )
  }

  return (
    <Screen>
      {isLoading ?
        <ActivityIndicator />
        : assenze.length === 0 ?
          <NoAssenze isLoading={isLoading} loadAssenze={handleRefresh} />
          : assenze === "error" ?
            <Error />
            : <SectionList
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              showsVerticalScrollIndicator={false}
              renderSectionHeader={({ section: { title } }) => (
                <Header title={title} />
              )}
              renderItem={renderItem}
              sections={assenze}
              keyExtractor={(item, index) => item + index}
            />
      }
    </Screen>
  );
};

export default AssenzeScreen;
