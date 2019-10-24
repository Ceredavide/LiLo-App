import React, { useState, useEffect } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";

import { PieChart } from "react-native-chart-kit";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const ChartProposte = () => {
  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "yellow",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "green",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  return (
    <PieChart
      style={styles.chart}
      data={data}
      width={wp("95%")}
      height={hp("25%")}
      chartConfig={{
        backgroundColor: "#ff3e03",
        backgroundGradientFrom: "#ff3e03",
        backgroundGradientTo: "#ff3e03",
        color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`
      }}
      accessor="legendFontSize"
      backgroundColor="white"
      paddingLeft={15}
    />
  );
};

const styles = StyleSheet.create({
  chart: {
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
