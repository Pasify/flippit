import { View, Text } from "react-native";
import styles from "./styles";
import defaultStyles from "../config/styles";
function AppText({ children, style, ...otherProps }) {
  return (
    <Text numberOfLines={1} style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
