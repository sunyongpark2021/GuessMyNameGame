import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors.js";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContents: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, //setting shadow for android
    shadowColor: "black", //shadow setting for IOS
    shadowOffset: { width: 0, height: 2 }, //shadow setting for IOS
    shadowRadius: 6, //shadow setting for IOS
    shadowOpacity: 0.25, //shadow setting for IOS
  },
});
