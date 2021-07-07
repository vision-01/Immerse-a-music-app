import React, { Component } from 'react';
import { View, Text ,Button,Image,StyleSheet,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import Applogo from '../../assets/applogo.png'

export default class Signup extends Component {

  render() {
    return (
        <View style={styles.container}>
        <Image style={styles.applogo} source={Applogo}/>
        <Text style={styles.subtitle}>Sign Up using Email</Text>
        <View style={styles.inputs}>
            <View style={styles.textinput2}>
                <TextInput 
                    style={styles.input}
                    placeholder="Email Id..."
                    placeholderTextColor="grey"
                    keyboardType='email-address'
                    />
            </View>
            <View style={styles.textinput3}>
                <TextInput 
                    style={styles.input}
                    placeholder="Password..."
                    placeholderTextColor="grey"
                    secureTextEntry={true}
                    />
            </View>
        </View>
        <View style={{marginTop: 50}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Next")}>
                <View style={styles.loginbtn}>
                    <Text style={styles.text}>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={{marginTop: 30,flexDirection:'row'}}>
            <Text style={{color:'white',fontSize: 15}}>Don't have an Acoount? </Text>
            <Text onPress={()=>this.props.navigation.pop()} style={{color:'white',fontSize: 15,marginBottom: 20}}>Sign In</Text>
        </View>
      </View>
    );
  }
}







const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent:'center'
    },
    applogo:{
        height: 150,
        width: 150,
        borderRadius: 20,
        marginTop: 30,
        marginBottom: 20,
    },
    subtitle:{
        color:'white',
        fontSize: 25,
        marginRight: 30,
        marginLeft: 30,
        textAlign:'center',
        marginTop: 50,
        fontWeight:'bold'
    },
    inputs:{
        marginTop: 50
    },  
    textinput1:{
        marginTop: 20,
        height: 60,
        width: 250,
        backgroundColor:'white',
        borderRadius:10
    },
    textinput2:{
        marginTop: 20,
        height: 60,
        width: 250,
        backgroundColor:'white',
        borderRadius:10
    },
    textinput3:{
        marginTop: 20,
        height: 60,
        width: 250,
        backgroundColor:'white',
        borderRadius:10
    },
    input:{
        color:'black',
        height: 50,
        width: 200,
        fontSize: 15,
        marginLeft: 20,
        justifyContent:'center',
        flex:1
    },
    loginbtn:{
        height: 50,
        width: 100,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10
    },
    text:{
        fontSize: 20,
        fontWeight:'bold',
    }
})


