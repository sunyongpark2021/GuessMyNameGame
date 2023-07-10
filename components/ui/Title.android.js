//This file will be executed automatically if device is Android. No need to put .android when importing this file.

import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "#fff700",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#fcef00",
    padding: 12,
    maxWidth: "80%",
    width: 300, //it will try to make width 300 or if screen cant fit 300, it will go for the maxWidth(80%)
  },
});
