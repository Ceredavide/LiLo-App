import React, { useState, useEffect } from "react";
import { SectionList, ActivityIndicator } from "react-native";

import Screen from "../components/shared/Screen"
import Header from "../components/assenze/Header";
import CardAssenza from "../components/assenze/CardAssenza";
import NoAssenze from "../components/assenze/NoAssenze";

import fetchAssenze from "../utils/fetchAssenze"

const AssenzeScreen = () => {
  const [assenze, setAssenze] = useState([])
  const [isLoading, setIsloading] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleFetch = async () => {
    setIsloading(true)
    setAssenze(await fetchAssenze())
    setIsloading(false)
  }

  const handleRefresh = async () => {
    setIsRefreshing(true)
    setAssenze(await fetchAssenze())
    setIsRefreshing(false)
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <Screen>
      {isLoading ? (
        <ActivityIndicator />
      ) : assenze === "" ? (
        <NoAssenze
          isLoading={isLoading}
          loadAssenze={handleRefresh}
        />
      ) : (
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
