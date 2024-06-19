import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Pressable,
} from "react-native";
import LoginPage from "./Components/LoginPage";
import Homepage from "./Components/Homepage";

export default function App() {
  return (
    <View style={styles.container}>
      <Homepage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFD",
  },
});
