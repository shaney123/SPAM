import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Color } from '../src/constants';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { StatusBar } from 'expo-status-bar';

const Login = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: Color.primary, flexDirection: 'column' }}>
      {/* HEADER */}
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 5, backgroundColor: Color.primary, }}>
        <Image source={require('../src/assets/ustplogo.png')} style={{ width: 65, height: 60 }} />
      </View>

      {/* CENTER */}
      <View style={{ flex: 3, backgroundColor: '#000080', alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground
          source={require('../src/assets/login.png')}
          style={{ width: '100%', height: '135%' }}
        ></ImageBackground>
      </View>

      {/* FOOTER */}
      <View style={{ flex: 2, backgroundColor: Color.primary, paddingHorizontal: 35, paddingTop: 5 }}>
        {/* Username Input */}
        <View style={styles.inputContainer}>
          <Icon name="user" size={24} color="black" style={styles.inputIcon} />
          <TextInput
            placeholder="Username"
            style={styles.input}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Icon name="lock" size={24} color="black" style={styles.inputIcon} />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={[styles.loginButton, { width: '40%' , alignSelf: 'center'}]}
          onPress={() => {
            navigation.navigate('Studentdashboard'); 
          }}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      <Text style={styles.text}>Don't have an account? </Text>
        {/* Register Link */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register'); 
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  inputIcon: {
    marginLeft: 10,
    color: Color.secondary
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: Color.primary,
    fontSize: 18,
  },
  registerLink: {
    color: Color.secondary,
    fontSize: 10,
    fontWeight:'bold',
    textAlign: 'center',
    marginTop: 5,
    textDecorationLine: 'underline', 
  },
  text:{
    padding: 1,
    letterSpacing:2,
    marginTop:10,
    fontSize:15,
    color: Color.secondary,
    textAlign: 'center',
  }
});

export default Login;
