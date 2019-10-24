import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import TabHeader from "../components/TabHeader";
import Card from "../components/home/Card";

const HomeScreen = () => {
  const [state, setState] = useState({ data: {}, loading: true });
  const { loading, data } = state;

  fetchComunicazioni = url => {
    fetch(url)
      .then(res => res.json())
      .then(resJson => {
        setState({
          data: resJson,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchComunicazioni("http://liloautogestito.ch/API/comunicazioni_static.py");
  }, [loading]);

  return (
    <SafeAreaView style={styles.container}>
      <TabHeader title="Home" />
      <View style={styles.containerList}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={item => item.titolo}
            refreshing={loading}
            onRefresh={() => setState({ loading: true })}
            renderItem={({ item }) => (
              <Card
                titolo={item.titolo}
                img={item.img}
                comunicazione={item.comunicazione}
              />
            )}
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
});

export default HomeScreen;
