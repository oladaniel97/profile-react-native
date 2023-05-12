import { FlatList, ImageBackground, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState,useEffect } from 'react';
import { GlobalStyle } from '../static/globalstyle';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home({navigation,route}) {

    const [people,setPeople]=useState([])

    useEffect(() => {
      async function getData() {
        try {
          const jsonValue = await AsyncStorage.getItem('@people');
          const storedPeople = jsonValue != null ? JSON.parse(jsonValue) : [{name:'ade',full_name:'olaynka',age:'23',about:'i am me',key:1}];
          setPeople(storedPeople);
          
        } catch(e) {
          console.log(e);
        }
      }
      getData();
    }, []);

const AddNew=()=>{
    navigation.navigate('AddNew',{people,setPeople})
}

  return (
    <ImageBackground  style={{flex:1}} source={require('../assets/bg.jpg')}>
      <View style={GlobalStyle.container} >
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={GlobalStyle.text}>Home</Text>
            <TouchableOpacity onPress={AddNew}>
                <Text style={GlobalStyle.button}>Add New</Text>
            </TouchableOpacity>
        </View>
        <FlatList
          data={people}
          keyExtractor={(item) => item.key}
          extraData={people}
          renderItem={({item})=>
              (<TouchableOpacity onPress={()=>{navigation.navigate('Details',item)}}>
                  <Text style={GlobalStyle.button}>{item.name}</Text>
              </TouchableOpacity>
          )}
          />
      </View>
    </ImageBackground>
  )
}

