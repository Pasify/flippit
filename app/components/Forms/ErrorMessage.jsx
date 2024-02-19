import { View, Text, StyleSheet } from "react-native";
import AppText from "../AppText";
function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <AppText style={style.error}>{error}</AppText>;
}
const style = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
  },
});
export default ErrorMessage;
