import { StyleSheet } from "react-native";


export const GlobalStyle =StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        fontFamily:'NunitoRegular'
        
    },
    text:{
        fontFamily:'NunitoBold',
        fontSize:18,
        textTransform:'capitalize'
    },
    paragraph:{
        marginVertical:8,
        lineHeight:20,
    },
    button:{
        padding:10,
        backgroundColor:'teal',
        borderRadius:5,
        marginTop:10,
        borderColor:'gray',
        textAlign:'center',
        color:'white',
        fontFamily:'NunitoRegular',
        textTransform:'capitalize'
    },
    image:{
        width:100,
        height:100,
        borderRadius:100,
        resizeMode:'cover'
    },
    textinput:{
        padding:5,
        borderRadius:5,
        marginTop:5,
        marginBottom:5,
        borderWidth:1,
        borderStyle:'dotted',
        fontFamily:'NunitoRegular',
        fontSize:15
    },
    error:{
        fontFamily:'NunitoRegular',
        fontSize:15,
        color:'tomato',
        textAlign:'center'
    }
})