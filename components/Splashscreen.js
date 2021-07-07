import React, { Component } from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import Logo1 from '../assets/logo1.png'

export default class splash extends Component {
    constructor(props){
      super(props);
    }
    render(){
     return (
       <View style={styles.container}>
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('MainPage')}>
           <Image style={styles.logo} source={Logo1}/>
         </TouchableOpacity>
       </View>
     );
    }
 }
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      height: 200,
      width: 200
    }
  });
  
  
  