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

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator />
        : <BarChart
          style={styles.chart}
          data={data}
          width={wp("95%")}
          height={hp("25%")}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
          }}
        />}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp("1%"),
    backgroundColor: "white",
    justifyContent: "center",
    width: wp("95%"),
    height: hp("25%")
  },
  chart: {
    alignSelf: "center",
    marginTop: hp("1%"),
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1
  }
});

export default ChartProposte;