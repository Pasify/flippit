import { StyleSheet, SafeAreaView, View } from "react-native";
import Constants from "expo-constants";

function ScreenView({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.View, style]}>{children}</View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  View: {
    flex: 1,
  },
});
export default ScreenView;
