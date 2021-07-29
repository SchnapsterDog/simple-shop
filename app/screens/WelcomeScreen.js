import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  const onLogin = () => navigation.navigate('Login');
  const onRegister = () => navigation.navigate('Register');

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/icon.png")}
        ></Image>
        <AppText
          title="Welcome to the App"
          style={styles.title}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={onLogin} />
        <AppButton title="Register" onPress={onRegister} color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 20
  }
});

export default WelcomeScreen;
