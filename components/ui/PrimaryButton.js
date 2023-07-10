import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={
          ({ pressed }) =>
            pressed
              ? [styles.buttonInnerContainer, styles.pressed] //actvates both styles when pressed
              : styles.buttonInnerContainer //Activate onlly this style when not pressed
        }
        onPress={onPress} // When pressing onPress at StartGameScree, activates function {onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 13,
    margin: 4,
    overflow: "hidden",
    padding: 10,
    backgroundColor: Colors.primary500,
  },
  buttonInnerContainer: {
    backgroundColor: "#f78707ec",
    paddingVertical: 1,
    paddingZHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    padding: 5,
  },
  pressed: {
    opacity: 0.75, //opacity 0~1
  },
});
