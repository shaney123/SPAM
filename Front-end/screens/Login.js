import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import axios from "axios";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const data = {
    username: username,
    password: password,
  };

  const handleLogin = () => {
    console.log("login function called");
    axios
      .post("http://192.168.1.36:3101/api/v1/user/login", data)
      .then((res) => {
        console.log(res.data);

        if (res.data.success) {
          if(res.data.authority==='student'){
             console.log("true");
    navigation.navigate('Studentdashboard')
}
}
else {
    console.log("Operation failed");
}
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require("../src/assets/ustplogo.png")}
          style={styles.logo}
        />
      </View>

      {/* CENTER */}
      <View style={styles.center}>
        <ImageBackground
          source={require("../src/assets/login.png")}
          style={styles.backgroundImage}
        ></ImageBackground>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        {/* Username Input */}
        <View style={styles.inputContainer}>
          <Icon name="user" size={24} color="black" style={styles.inputIcon} />
          <TextInput
            placeholder="Username"
            style={styles.input}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Icon name="lock" size={24} color="black" style={styles.inputIcon} />
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          {/* Show Password Icon */}
          <TouchableOpacity
            style={styles.showPasswordIcon}
            onPress={toggleShowPassword}
          >
            <Icon
              name={showPassword ? "eye" : "eye-slash"}
              size={20}
              color="#f8b319"
            />
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={[styles.loginButton, { width: "40%", alignSelf: "center" }]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Don't have an account? </Text>

        {/* Register Link */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.registerLink}>Click here to Register!</Text>
        </TouchableOpacity>
      </View>

      {/* StatusBar */}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    flexDirection: "column",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 5,
    backgroundColor: Color.primary,
    padding: 15,
  },
  logo: {
    width: 65,
    height: 60,
  },
  center: {
    flex: 3,
    backgroundColor: "#000080",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "135%",
  },
  footer: {
    flex: 2,
    backgroundColor: Color.primary,
    paddingHorizontal: 35,
    paddingTop: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "white",
    borderRadius: 10,
  },
  showPasswordIcon: {
    position: "absolute",
    right: 10,
  },
  inputIcon: {
    marginLeft: 10,
    color: Color.secondary,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 12,
  },
  loginButton: {
    backgroundColor: Color.secondary,
    height: 40,
    width: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: Color.primary,
    fontSize: 25,
  },
  registerLink: {
    color: Color.secondary,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  text: {
    padding: 1,
    letterSpacing: 2,
    marginTop: 10,
    fontSize: 15,
    color: Color.secondary,
    textAlign: "center",
  },
});

export default Login;
