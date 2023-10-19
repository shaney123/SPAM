import { View, Text, StyleSheet, ImageBackground, StatusBar, Image } from 'react-native';
import React from 'react';
import { Color } from '../src/constants';
import Button from '../src/components/Button';


const Onboarding = ({ navigation }) => {
  
  return (
    <View style={{ flex: 1, backgroundColor: Color.primary }}>

    
      {/* HEADER */}
      <View style={{ flex: 1, flexDirection: "row", justifyContent: 'flex-end' }}>
        <Image source={require('../src/assets/ustplogo.png')} style={{ width: 65, height: 60 }} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[styles.text]}>Track Your Progress!</Text>
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

       {/* StatusBar */}
      <StatusBar style="auto" />

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
