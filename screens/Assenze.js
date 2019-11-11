import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  SectionList,
  ActivityIndicator
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { fetchAssenze } from "../store/actions/assenze";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import TabHeader from "../components/TabHeader";
import Header from "../components/assenze/Header";
import Item from "../components/assenze/Item";

const AssenzeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const assenze = useSelector(state => state.assenze.assenze);

  const dispatch = useDispatch();

  useEffect(() => {
    loadAssenze();
  }, [dispatch]);

  const loadAssenze = async () => {
    setIsLoading(true);
    await dispatch(fetchAssenze());
    setIsLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabHeader title="Assenze" />
      <View style={styles.containerList}>
        {isLoading ? (
          <ActivityIndicator />
        ) : assenze === "" ? (
          <Text style={styles.noAssenze}>Non sono previste assenze</Text>
        ) : (
          <SectionList
            refreshing={isLoading}
            onRefresh={() => loadAssenze()}
            showsVerticalScrollIndicator={false}
            renderSectionHeader={({ section: { title } }) => (
              <Header title={title} />
            )}
            renderItem={({ item, index }) => (
              <Item
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009fff"
  },
  containerList: {
    flex: 1,
    padding: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F5F9"
  },
  noAssenze: {
    fontSize: hp("3%")
  }
});

export default AssenzeScreen;
