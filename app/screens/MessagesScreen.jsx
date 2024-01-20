import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import ScreenView from "../components/ScreenView";
import ListItemSeparator from "../components/ListItemSeparator";

import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { useState } from "react";
import colors from "../config/colors";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/paskkal.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/paskkal.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/paskkal.jpg"),
  },
];
function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleDelete = function (message) {
    let newMessages = messages.filter((msg) => msg.id !== message.id);
    setMessages(newMessages);

    // console.log(message);
  };
  return (
    <ScreenView>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(`messages selected`, item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        keyExtractor={(messages) => messages.id.toString()}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={isRefreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/paskkal.jpg"),
            },
          ]);
        }}
      />
    </ScreenView>
  );
}

const styles = StyleSheet.create({});
export default MessagesScreen;
