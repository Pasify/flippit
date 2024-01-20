import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.text}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
export default PickerItem;
