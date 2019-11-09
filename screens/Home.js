import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchComunicazioni,
  reloadComunicazioni
} from "../store/actions/comunicazioni";

import Card from "../components/home/Card";
import IconButton from "../components/IconButton";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const data = useSelector(state => state.comunicazioni.comunicazioni);
  const dispatch = useDispatch();

  useEffect(() => {
    loadComunicazioni();
  }, [dispatch]);

  const loadComunicazioni = async () => {
    setLoading(true);
    await dispatch(fetchComunicazioni());
    setLoading(false);
  };

  const reloadData = async () => {
    setLoading(true);
    await dispatch(reloadComunicazioni());
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          refreshing={loading}
          onRefresh={() => reloadData()}
          showsVertcialScrollIndicator={false}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F5F9"
  }
});

export default HomeScreen;
