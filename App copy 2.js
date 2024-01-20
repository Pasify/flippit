import { View, Text, Button } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from "@react-navigation/native";

const Tweets = function ({ navigation }) {
  <View>
    <Text>Tweets</Text>
    <Button
      title="view tweets"
      onPress={() => navigation.navigate("TweetDetails")}
    />
  </View>;
};

const TweetDetails = function () {
  <View>
    <Text>Tweet details</Text>
  </View>;
};
const { Screen, Navigator } = createNativeStackNavigator();
function StackNavigator() {
  return (
    <Navigator initialRouteName="Tweets">
      <Screen name="Tweets" component={Tweets} />
      <Screen name="TweetDetails" component={TweetDetails} />
    </Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
