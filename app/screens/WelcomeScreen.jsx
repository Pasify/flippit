import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/flippitLogo.png")}
        />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title={"login"} onPress={() => console.log(`pressed`)} />
        <AppButton
          title={"Register"}
          color="secondary"
          onPress={() => console.log(`pressed`)}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    width: "100%",
    gap: 10,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
