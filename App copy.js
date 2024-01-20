// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useLayout, useDeviceOrientation } from "@react-native-community/hooks";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  Button,
  Alert,
  Platform,
  StatusBar,
  useWindowDimensions,
} from "react-native";

export default function App() {
  let { fontScale, height, width, scale } = useWindowDimensions();
  let orientation = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: orientation === "landscape" ? "100%" : "30%",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
