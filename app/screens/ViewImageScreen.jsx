import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
let { primary, secondary, blackColor } = colors;
function ViewImageScreen({ style }) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          name="close"
          color={colors.whiteColor}
          size={30}
        />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.whiteColor}
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/sofa1.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: blackColor,
    flex: 1,
  },

  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
