import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Color } from '../src/constants';
import Button from '../src/components/Button';
import { useFonts, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans'; // Import the font

const Onboarding = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    OpenSans_600SemiBold, // Load the font
  });

  if (!fontsLoaded) {
    // You can return a loading indicator here while the fonts are loading
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: Color.primary }}>
      {/* HEADER */}
      <View style={{ flex: 1, flexDirection: "row", justifyContent: 'flex-end' }}>
        <Image source={require('../src/assets/ustplogo.png')} style={{ width: 65, height: 60 }} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[styles.text, { fontFamily: 'OpenSans_600SemiBold' }]}>Track Your Progress!</Text>
      </View>
      {/* CENTER */}
      <View style={{ flex: 2, backgroundColor: '#000080', alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground
          source={require('../src/assets/logo.png')}
          style={{ width: '110%', height: '75%' }}
        >
          <Image source={require('../src/assets/welcome2.png')} style={{ width: '100%', height: '120%' }} />
        </ImageBackground>
      </View>

      {/* FOOTER */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Color.primary }}>
        <Button btn_text={"Get Started!"} on_press={() => navigation.navigate("Login")} />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: Color.secondary,
  },
});
