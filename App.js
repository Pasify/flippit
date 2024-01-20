import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Switch,
} from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ScreenView from "./app/components/ScreenView";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "furniture", value: 1 },
  { label: "clothing", value: 2 },
  { label: "camera", value: 3 },
];
function App() {
  const [firstName, setFirstName] = useState("");
  const [isNew, setIsNew] = useState(false);

  // console.log(require("./app/assets/sofa1.jpg"));
  // return <WelcomeScreen />;
  // return <ListingDetailsScreen />;
  // return <AccountScreen />;
  // return <ListingsScreen />;
  const [category, setCategory] = useState(categories[0]);
  return (
    <ScreenView>
      <AppPicker
        items={categories}
        placeholder="category"
        icon="apps"
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      />
      <AppTextInput placeholder="email" icon="email" />
    </ScreenView>
  );
}

export default App;
