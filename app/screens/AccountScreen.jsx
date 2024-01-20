import { View, Text, FlatList } from "react-native";
import { StyleSheet } from "react-native";

import ScreenView from "../components/ScreenView";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];
function AccountScreen() {
  return (
    <ScreenView style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="ifesinachi Obiora"
          subTitle="ifesinachiobiora@gmail.com"
          image={require("../assets/paskkal.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  size={30}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={() => <ListItemSeparator />}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </ScreenView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.lightGrey,
  },
});
export default AccountScreen;
