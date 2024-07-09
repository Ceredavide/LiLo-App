import { Platform } from "react-native"

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import COLORS from "../../constants/COLORS"

const styles = {
  headerMode: "screen",
  headerStyle: {
    elevation: 0,
    backgroundColor: COLORS.main,
    height: Platform.OS === "ios" ? hp("15%") : hp("10%"),
    shadowColor: 'transparent'
  },
  headerTitleAlign: "left",
  headerTitleStyle: {
    alignSelf: "flex-start",
    color: COLORS.white,
    fontFamily: "PlayFair-SemiBold",
    fontSize: hp("6%"),
    marginLeft: wp("3%")
  },
  headerBackTitleVisible: false,
  headerTintColor: COLORS.white
}

export default styles;