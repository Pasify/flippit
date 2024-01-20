import { View, Text, StyleSheet } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

let styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
});
export default AppText;
