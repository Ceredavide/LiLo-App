import React from "react";
import { SectionList, ActivityIndicator, RefreshControl } from "react-native";

import useAssenze from "../hooks/useAssenze"

import Error from "./Error"
import Screen from "../components/shared/Screen"
import TransitionView from "../components/shared/TransitionView"
import Header from "../components/assenze/Header";
import CardAssenza from "../components/assenze/CardAssenza";
import NoAssenze from "../components/assenze/NoAssenze";

import COLORS from "../constants/COLORS"

const AssenzeScreen = () => {

  const {
    assenze,
    error,
    isLoading,
    isRefreshing,
    handleRefresh,
    handleFetch
  } = useAssenze()

  function renderItem({ item, index }) {
    return (
      <TransitionView index={index} >
        <CardAssenza
          key={index}
          nome={item.name + " " + item.surname}
          descrizione={item.reason}
        />
      </TransitionView>
    )
  }

  return (
    <Screen>
      {isLoading ?
        <ActivityIndicator color={COLORS.white} />
        : error ?
          <Error text={error.response?.data || "Qualcosa è andato storto."} reload={handleFetch} />
          : assenze.length === 0 ?
            <NoAssenze isLoading={isLoading} loadAssenze={handleRefresh} />
            : <SectionList
              refreshing={isRefreshing}
              showsVerticalScrollIndicator={false}
              renderSectionHeader={({ section: { title } }) => (
                <Header title={title} />
              )}
              refreshControl={
                <RefreshControl
                  refreshing={isRefreshing}
                  onRefresh={handleRefresh}
                  tintColor={COLORS.white}
                />
              }
              renderItem={renderItem}
              sections={assenze}
              keyExtractor={(item, index) => item + index}
            />
      }
    </Screen>
  );
};

export default AssenzeScreen;
