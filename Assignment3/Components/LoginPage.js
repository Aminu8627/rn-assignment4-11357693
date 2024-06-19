import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Pressable,
} from "react-native";
import appleLogo from "../assets/cib_apple.png";
import googleLogo from "../assets/flat-color-icons_google.png";
import facebookLogo from "../assets/ion_logo-facebook.png";
import { Link } from "expo-router";

function LoginPage({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home", { name, email });
  };

  return (
    <View style={styles.container}>
      <View style={styles.intro}>
        <Text style={styles.appName}>Jobizz</Text>
        <Text style={styles.introText}>Welome Back 👋</Text>
        <Text style={styles.subIntro}>Let’s log in. Apply to jobs!</Text>
      </View>
      <View style={styles.formInputSection}>
        <TextInput placeholder="Name" style={styles.nameInputSection} value={name} onChangeText={setName} />
        <TextInput placeholder="Email" style={styles.emailInputSection}  value={email} onChangeText={setEmail}/>
        <View style={styles.loginButton}>
            <Button title="Login" color="#356899" width="300px" onPress={handleLogin} />
        </View>
      </View>

      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.text}>Or continue with</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.otherLoginOption}>
        <View>
          <Pressable style={styles.appleIcon} title="">
            <Image source={appleLogo} />
          </Pressable>
        </View>
        <View>
          <Pressable>
            <Image source={googleLogo} />
          </Pressable>
        </View>
        <View>
          <Pressable>
            <Image source={facebookLogo} />
          </Pressable>
        </View>
      </View>
      <Text style={styles.registerLink}>
        Haven’t an account? <Text>Register</Text>
      </Text>
    </View>
  );
}

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  intro: {
    padding: 10,
  },
  appName: {
    fontSize: 22,
    fontWeight: "600",
    color: "#356899",
    margin: 5,
  },
  introText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#0D0D26",
  },
  subIntro: {
    fontSize: 14,
    fontWeight: "400",
    color: "#0D0D26",
  },
  formInputSection: {
    marginHorizontal: 10,
  },
  nameInputSection: {
    color: "#0D0D26",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#AFB0B6",
    fontSize: 14,
    padding: 10,
    width: 328,
    marginTop: 30,
    marginBottom: 10,
  },
  emailInputSection: {
    color: "#0D0D26",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#AFB0B6",
    fontSize: 14,
    padding: 10,
    width: 328,
    marginTop: 10,
    marginBottom: 20,
  },
  loginButton: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 328,
    backgroundColor: "#356899",
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  line: {
    flex: 1,
    width: 328,
    height: 1,
    backgroundColor: "gray", // Line color
    marginHorizontal: 10,
  },
  otherLoginOption: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    width: 216,
  },
  registerLink: {
    textAlign: "center",
    marginTop: 30,
  },
});
