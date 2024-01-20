import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image} />}

            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.whiteColor,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
export default ListItem;
