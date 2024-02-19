import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Switch,
} from "react-native";

import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListItem from "./app/components/ListItem";
// import ListingsScreen from "./app/screens/ListItem";
import AccountScreen from "./app/screens/AccountScreen";

import ListingsDetails from "./app/screens/ListingDetailsScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

const categories = [
  { label: "furniture", value: 1 },
  { label: "clothing", value: 2 },
  { label: "camera", value: 3 },
];
function App() {
  // return <LoginScreen />;
  return <ListingEditScreen />;
}

export default App;
