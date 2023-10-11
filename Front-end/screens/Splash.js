import React, { useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import Color from '../src/constants/Color';
import { useFonts, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans'; // Import the font

const Splash = ({ navigation }) => {
  const [loaded] = useFonts({
    OpenSans_600SemiBold // Replace with the actual font file path.
  });

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        navigation.replace('Onboarding');
      }, 3000);
    }
  }, [loaded, navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" hidden={false} backgroundColor="#000080" />
      <Image source={require('../src/assets/ustplogo.png')} style={styles.logo} />
      <Text style={styles.text}>Home of the trailblazers!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary,
  },
  logo: {
    width: 150,
    height: 130,
  },
  text: {
    fontSize: 25,
    color: Color.secondary,
  },
});

export default Splash;
