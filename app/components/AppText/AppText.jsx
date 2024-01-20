import { View, Text } from "react-native";
import styles from "./styles";
import defaultStyles from "../config/styles";
function AppText({ children, style }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

export default AppText;
