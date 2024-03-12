import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Switch,
  Image,
} from "react-native";

// import LoginScreen from "./app/screens/LoginScreen";
// import ListingEditScreen from "./app/screens/ListingEditScreen";
// import ListItem from "./app/components/ListItem";
// // import ListingsScreen from "./app/screens/ListItem";
// import AccountScreen from "./app/screens/AccountScreen";

// import ListingsDetails from "./app/screens/ListingDetailsScreen";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import ScreenView from "./app/components/ScreenView";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ScreenView from "./app/components/ScreenView";
import AppButton from "./app/components/AppButton";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
// const categories = [
//   { label: "furniture", value: 1 },
//   { label: "clothing", value: 2 },
//   { label: "camera", value: 3 },
// ];
function App() {
  return (
    <ScreenView>
      <ImageInput />
    </ScreenView>
  );
}

export default App;
