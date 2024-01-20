import { View, Text, FlatList, StyleSheet } from "react-native";
import ScreenView from "../components/ScreenView";
import Card from "../components/Card";
import colors from "../config/colors";

const Listings = [
  {
    id: 1,
    title: "brown sofa for sale",
    price: 29500,
    image: require("../assets/sofa1.jpg"),
  },
  {
    id: 2,
    title: "mens jean jacket for sale",
    price: 29500,
    image: require("../assets/jacket.jpg"),
  },
];
function ListingsScreen() {
  return (
    <ScreenView style={styles.screen}>
      <FlatList
        data={Listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card image={item.image} subtitle={item.price} title={item.title} />
        )}
      />
    </ScreenView>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
});
export default ListingsScreen;
