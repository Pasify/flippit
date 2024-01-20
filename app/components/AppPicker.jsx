import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import { useState } from "react";
import ScreenView from "./ScreenView";
import ListItem from "./ListItem";
import PickerItem from "./PickerItem";
function AppPicker({ icon, placeholder, items, onSelectItem, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);
  function handleVisibility() {
    setModalVisible((prev) => !prev);
  }
  return (
    <>
      <TouchableWithoutFeedback onPress={handleVisibility}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <ScreenView>
          <Button title="close" onPress={handleVisibility} />

          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  handleVisibility();
                  onSelectItem(item);
                }}
                selectedItem={item}
              />
            )}
          />
        </ScreenView>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  text: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});
export default AppPicker;
