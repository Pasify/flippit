import { View, Text, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/sofa2.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Quality Sofa for sale</AppText>
        <AppText style={styles.price}>₦27,000</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Paskkal.io"
            subTitle="5 Listings"
            image={require("../assets/paskkal.jpg")}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailsScreen;
