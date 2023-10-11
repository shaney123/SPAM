import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({on_press,btn_text}) => {
  return (

    <TouchableOpacity style= {{justifyContent:'center',width:'90%',backgroundColor:Color.secondary,height:50,
                marginBottom:50,borderRadius:15}}
                onPress={on_press}
                >
                     <Text style={{fontSize:25,letterSpacing:1.5,textAlign: 'center', color:Color.primary,fontFamily:'OpenSans-SemiBold'}}>{btn_text}</Text>
                </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})