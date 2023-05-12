import { StyleSheet, Text, View ,ImageBackground,TouchableOpacity, TextInput, SafeAreaView,Keyboard,Alert, TouchableWithoutFeedback,ScrollView} from 'react-native'
import React from 'react'
import { GlobalStyle } from '../static/globalstyle'
import { Formik } from 'formik'
import * as yup from 'yup'
import shortid from 'shortid';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AddNew({navigation,route}) {

    const {people,setPeople}=route.params
    
    const Home=()=>{
        navigation.goBack()
    }

    const schema = yup.object({
        name:yup.string().required().min(2),
        full_name:yup.string().required().min(2),
        about:yup.string().required().min(2),
        age:yup.string().required()
    })

    const submitForm = async(values) => {
        try {
            await schema.validate(values)
            // we can use yup to validate our form
            const updatedPeople =[{key: shortid.generate(),
                name: values.name,
                age: values.age,
                about: values.about,
                full_name: values.full_name,},...people]
            await AsyncStorage.setItem('people',JSON.stringify(updatedPeople))
            setPeople(updatedPeople)
            navigation.goBack();
        } catch (error) {
            Alert.alert('Oops!', error.message, [{ text: 'Understood' }]);
        }

        // or
        // if(values.name!='' && values.full_name!=''&& values.age!='' && values.about!=''){
        //     setPeople([{key: shortid.generate(),
        //         name: values.name,
        //         age: values.age,
        //         about: values.about,
        //         full_name: values.full_name,},...people])
        //     navigation.goBack();
        // }
        // else{
        //     Alert.alert('Oops!','please enter a word or sentence',[{text:'Understood'}])
        // }
        Keyboard.dismiss()
    }

    return (
        <ImageBackground  style={{flex:1}} source={require('../assets/bg.jpg')}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={GlobalStyle.container}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={GlobalStyle.text}>Add New </Text>
                <TouchableOpacity onPress={Home}>
                    <Text style={GlobalStyle.button}>Home page</Text>
                </TouchableOpacity>
            </View>
{/* install formik by using npm install formik */}
{/* npm install yul for form validation */}
        <ScrollView keyboardShouldPersistTaps="always" >
            <Formik initialValues={{name:'',full_name:'',age:'',about:''}} onSubmit={submitForm} validationSchema={schema}>
                {({handleChange, handleBlur, handleSubmit, values, errors, touched})=>(
                    <SafeAreaView style={{marginTop:15}}>
                        <View>
                            <Text style={GlobalStyle.text}>Username: </Text>
                            <TextInput style={GlobalStyle.textinput} value={values.name} onChangeText={handleChange('name')} onBlur={handleBlur('name')}/>
                        </View>
                        <Text style={GlobalStyle.error}>{touched.name &&errors.name}</Text>
                        <View>
                            <Text style={GlobalStyle.text}>Full Name: </Text>
                            <TextInput style={GlobalStyle.textinput} value={values.full_name} onChangeText={handleChange('full_name')} onBlur={handleBlur('full_name')}/>
                        </View>
                        <Text style={GlobalStyle.error}>{touched.full_name && errors.full_name}</Text>
                        <View>
                            <Text style={GlobalStyle.text}>Age: </Text>
                            <TextInput style={GlobalStyle.textinput} value={values.age} keyboardType='numeric' onChangeText={handleChange('age')} onBlur={handleBlur('age')}/>
                        </View>
                        <Text style={GlobalStyle.error}>{touched.age &&errors.age}</Text>
                        <View>
                            <Text style={GlobalStyle.text}>About: </Text>
                            <TextInput style={GlobalStyle.textinput} value={values.about} multiline onChangeText={handleChange('about')} onBlur={handleBlur('about')}/>
                        </View>
                        <Text style={GlobalStyle.error}>{touched.about &&errors.about}</Text>
                        <TouchableOpacity onPress={handleSubmit} activeOpacity={0.5} >
                            <Text style={[GlobalStyle.button,{fontSize:20,fontFamily:'NunitoBold'}]}>Add</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                )}
            </Formik>
        </ScrollView>
        </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
      )
    }