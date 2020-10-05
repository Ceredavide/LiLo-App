import { Platform } from "react-native"

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Colors from "../../constants/colors"

export default styles = {
  headerStyle: {
    elevation: 0,
    backgroundColor: Colors.main,
    height: Platform.OS === "ios" ? hp("15%") : hp("10%"),
    shadowColor: 'transparent'
  },
  headerTitleAlign: "left",
  headerTitleStyle: {
    alignSelf: "flex-start",
    color: Colors.white,
    fontFamily: "System",
    fontSize: hp("6%"),
    marginLeft: wp("3%")
  },
  headerBackTitleVisible: false,
  headerTintColor: Colors.white
}