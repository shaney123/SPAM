import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
  StyleSheet,
  Alert,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    middleName: '',
    lastName: '',
    phoneNumber: '',
    gender: '',
    birthday: '',
    address: '',
  });

  const handleFormChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleRegister = () => {
    // Check if any field is empty
    const isFormIncomplete = Object.values(formData).some(value => value === '');

    if (isFormIncomplete) {
      // Show a warning if the form is incomplete
      Alert.alert('Incomplete Form', 'Please fill out all the form fields before registering.');
    } else {
      // Save the form data (you can implement your data saving logic here)

      // Show a confirmation prompt
      Alert.alert('Registration Successful', 'Your data has been saved.', [
        {
          text: 'OK',
          onPress: () => {
            // Navigate back to the login screen or any other screen as needed
            navigation.navigate('LoginScreen');
          },
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Create an account</Text>
        <Image
          source={require('../src/assets/ustplogo.png')} // Replace with your logo image
          style={styles.logoImage}
        />
      </View>
      <KeyboardAvoidingView
        style={styles.formContainer}
        behavior="padding"
        enabled={!isKeyboardVisible}
      >
        <ScrollView keyboardShouldPersistTaps="handled">

        <TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={formData.username}
            onChangeText={text => handleFormChange('username', text)}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={formData.firstName}
            onChangeText={text => handleFormChange('firstName', text)}
          />
          </TouchableOpacity>

            <TextInput
            style={styles.input}
            placeholder="Middle Name"
            value={formData.middleName}
            onChangeText={text => handleFormChange('middleName', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={formData.lastName}
            onChangeText={text => handleFormChange('lastName', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChangeText={text => handleFormChange('phoneNumber', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Gender"
            value={formData.gender}
            onChangeText={text => handleFormChange('gender', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Birthday"
            value={formData.birthday}
            onChangeText={text => handleFormChange('birthday', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={formData.address}
            onChangeText={text => handleFormChange('address', text)}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      {!isKeyboardVisible && (
  <View>
    <TouchableOpacity
      style={[styles.registerButton, { width: '40%', alignSelf: 'center' }]}
      onPress={handleRegister} // Move this line outside of the style object
    >
      <Text style={styles.registerButtonText}>Submit</Text>
    </TouchableOpacity>
    <Text style={styles.text}>Already have an account? </Text>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Login');
      }}
    >
      <Text style={styles.loginLink}>Click here to LOGIN!</Text>
    </TouchableOpacity>
  </View>
)}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000080',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 2,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f8b319',
  },
  logoImage: {
    width: 50,
    height: 75,
    marginRight: 2,
  },
  formContainer: {
    flex: 2,
    paddingHorizontal: 30,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    borderWidth: 2,
    padding: 50,
    margin: 18,
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f8b319',
    borderRadius: 2,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    padding: 10,
  },
  registerButton: {
    backgroundColor: '#f8b319',
    height: 40,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  registerButtonText: {
    color: '#000080',
    fontSize: 25,
  },
  loginLink: {
    color: '#f8b319',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    padding:15,
  },
  text: {
    padding: 1,
    letterSpacing: 2,
    marginTop: 5,
    fontSize: 15,
    color: '#f8b319',
    textAlign: 'center',
  },
});

export default RegisterScreen;
