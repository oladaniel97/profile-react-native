import { StyleSheet, Text, View,TouchableOpacity,Image,ImageBackground } from 'react-native'
import React from 'react'
import { GlobalStyle } from '../static/globalstyle'

export default function Details({navigation,route}) {
    const Home=()=>{
        navigation.goBack()
    }
    return (
        <ImageBackground  style={{flex:1}} source={require('../assets/bg.jpg')}>
        <View style={GlobalStyle.container}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={GlobalStyle.text}>{route.params?.name} Details</Text>
                <TouchableOpacity onPress={Home}>
                    <Text style={GlobalStyle.button}>Home page</Text>
                </TouchableOpacity>
            </View>
          
            <Text style={GlobalStyle.text}>{route.params?.full_name}</Text>
            {/* <Image source={route.params?.image} style={GlobalStyle.image} /> */}

        </View>
        <TouchableOpacity  style={{alignContent:'center',width:'30%'}}>
                    <Text style={[GlobalStyle.button, {marginBottom:20,backgroundColor:'tomato' }]}>Delete Profile</Text>
                </TouchableOpacity>
        </ImageBackground>
      )
    }
    
   