import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux"

import { BarChart } from "react-native-chart-kit";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const ChartProposte = () => {
  const isLoading = useSelector(state => state.proposte.loadingList)
  const labels = useSelector(state => state.proposte.classiArray)
  const chartData = useSelector(state => state.proposte.numeriArray)

  const data = {
    labels: labels,
    datasets: [
      {
        data: chartData
      }
    ]
  };

  if (isLoading) {
    return (
      <View style={{ ...styles.chart, height: hp("23%"), width: wp("90%"), backgroundColor: "white" }}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <BarChart
      style={styles.chart}
      data={data}
      height={hp("23%")}
      width={wp("90%")}
      chartConfig={{
        backgroundColor: '#ffffff',
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
      }}
    />
  )
};

const styles = StyleSheet.create({
  chart: {
    padding: 5,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: hp("2%"),
    marginHorizontal: wp("3%"),
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1
  },
});

export default ChartProposte;