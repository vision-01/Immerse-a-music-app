import React, { Component } from 'react'
import { View, Text ,Button,Image,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import Applogo from '../../assets/applogo.png'

export default class Nextbtn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.applogo} source={Applogo}/>
        <Text style={styles.subtitle}>What will be your name?</Text>
        <View style={styles.textinput1}>
                <TextInput 
                    style={styles.input}
                    placeholder="Username..."
                    placeholderTextColor="grey"
                    />
            </View>
        <View style={{marginTop: 50}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Bottomnav")}>
                <View style={styles.loginbtn}>
                    <Text style={styles.text}>Create Account</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    )
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
        marginBottom: 20,
    },
    subtitle:{
        color:'white',
        fontSize: 25,
        marginRight: 30,
        marginLeft: 30,
        textAlign:'center',
        marginTop: 50,
        fontWeight:'bold',
        marginBottom: 20
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
        width: 200,
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


