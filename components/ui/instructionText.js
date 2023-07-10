import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors.js";
function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>; //styles read from left to right. so rgith style overrides styles.
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.black,
    fontSize: 24,
  },
});
