import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  SectionList,
  ActivityIndicator,
  AsyncStorage
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import TabHeader from "../components/TabHeader";
import Header from "../components/assenze/Header";
import Item from "../components/assenze/Item";

const AssenzeScreen = () => {
  const [state, setState] = useState({ data: {}, loading: true });
  const { data, loading } = state;

  useEffect(() => {
    fetchAssenze();
  }, [loading]);

  fetchAssenze = async () => {
    let cookie = await AsyncStorage.getItem("res");
    fetch(`http://liloautogestito.ch/API/assenze_docenti.py?ses=${cookie}`)
      .then(res => res.json())
      .then(resJson => handleResponse(resJson))
      .catch(error => {
        console.log(error);
      });
  };

  handleResponse = res => {
    if (res.toString() === "") {
      setState({
        data: "",
        loading: false
      });
    } else {
      setState({
        data: res,
        loading: false
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabHeader title="Assenze" />
      <View style={styles.containerList}>
        {loading ? (
          <ActivityIndicator />
        ) : data === "" ? (
          <Text style={styles.noAssenze}>Non sono previste assenze</Text>
        ) : (
          <SectionList
            refreshing={loading}
            onRefresh={() => setState({ loading: true })}
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
            sections={data}
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
