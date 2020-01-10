import React, { useEffect } from "react";
import { StyleSheet, View, SectionList, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux"

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { fetchAssenze } from "../store/actions/assenze"

import Header from "../components/assenze/Header";
import CardAssenza from "../components/assenze/CardAssenza";
import NoAssenze from "../components/assenze/NoAssenze";

const AssenzeScreen = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.assenze.isLoading)
  const assenze = useSelector(state => state.assenze.assenze)

  useEffect(() => {
    dispatch(fetchAssenze())
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : assenze === "" ? (
          <NoAssenze
            isLoading={isLoading}
            loadAssenze={() => dispatch(fetchAssenze())}
          />
        ) : (
              <SectionList
                refreshing={isLoading}
                onRefresh={() => dispatch(fetchAssenze())}
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009fff"
  },
  cardContainer: {
    flex: 1,
    paddingTop: hp("2%"),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F5F9"
  },
  noAssenze: {
    fontSize: hp("3%")
  }
});

export default AssenzeScreen;
