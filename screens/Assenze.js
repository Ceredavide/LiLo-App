import React from "react";
import { SectionList, ActivityIndicator } from "react-native";

import useAssenze from "../hooks/useAssenze"

import Screen from "../components/shared/Screen"
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

  return (
    <Screen>
      {isLoading ? (
        <ActivityIndicator />
      ) : assenze === "" ? (
        <NoAssenze
          isLoading={isLoading}
          loadAssenze={handleRefresh}
        />
      ) : assenze === "error" ? <NoAssenze
        isLoading={isLoading}
        loadAssenze={handleRefresh}
      /> : (
              <SectionList
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
                showsVerticalScrollIndicator={false}
                renderSectionHeader={({ section: { title } }) => (
                  <Header title={title} />
                )}
                renderItem={({ item, index }) => (
                  <CardAssenza
                    key={index}
                    nome={item.name}
                    descrizione={item.description}
                  />
                )}
                sections={assenze}
                keyExtractor={(item, index) => item + index}
              />
            )}
    </Screen>
  );
};

export default AssenzeScreen;
