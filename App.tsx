import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import IndexPage from "./src/pages/Index";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <IndexPage />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
