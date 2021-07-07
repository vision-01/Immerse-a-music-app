import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image,Text,Button ,ImageBackground} from 'react-native'
import { Ionicons,FontAwesome5,MaterialCommunityIcons,Feather,MaterialIcons } from  '@expo/vector-icons'
import {Avatar, Icon,Slider } from 'react-native-elements'
import { Audio } from 'expo-av'
import TextTicker from 'react-native-text-ticker'


export default class MusicPlayer extends React.Component {

    constructor(props) {  
        super(props);  
        this.state={
          artwork: 'https://forum.byjus.com/wp-content/themes/qaengine/img/default-thumbnail.jpg',
          ver: true,
          like:false,
          title:"None",
          artist:"None",
          value: 0.0
        }
    }  
    
 
 async componentDidMount(){
    const data = this.props.route.params.url;
    const artwork = this.props.route.params.artwork;
    const title = this.props.route.params.title;
    const artist = this.props.route.params.artist;
   Audio.setAudioModeAsync({
     interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
     shouldDuckAndroid: true,
     staysActiveInBackground: true,
     playThroughEarpieceAndroid: false
   })
   this.Sound = new Audio.Sound();
   

   const status ={
      shouldPlay: false
   }
   
   this.setState({
     artwork: artwork,
     artist: artist,
     title: title
   })
   const source = {
    uri: `${data}`
  }
   
   this.Sound.loadAsync(source,status,false)
 }



  playSOund(){
    this.Sound.playAsync()
    this.setState(
      { ver:false }
  )
  }
  stopSound(){
    this.Sound.stopAsync()
    this.setState(
      { ver:true }
  )
  }
  pauseSound(){
    this.Sound.pauseAsync()
    this.setState(
      { ver:true }
  )
  }
  render() {
    var data=[];
        if(this.state.ver===true){
            data.push(
              <View  style={{height: 70,width: 70,backgroundColor:'#f6355d',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
                <Feather name="play" onPress={this.playSOund.bind(this)} style={{marginLeft:3}} color="white" size={35}/>
              </View>
            )
        }
        else{
            data.push(
              <View style={{height:70,width: 70,backgroundColor:'#f6355d',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
                <Feather name="pause" onPress={this.pauseSound.bind(this)} color='white' size={35} />
              </View>
            )
        }

  return (
    <View style={styles.container}>
      <ImageBackground
      style={{height: '60%',width: '100%',borderBottomLeftRadius:100,borderBottomRightRadius:100}}
        source={{
          uri:
            this.state.artwork,
        }}
        resizeMode="stretch"
        blurRadius={3}
      >
      <View style={styles.container1}>
      <View style={{marginTop: "80%"}}/> 
      {/*<Text style={{color:"white",fontSize: 30,fontWeight:'bold',marginBottom: 20}}>NOW PLAYING</Text>*/}
      <Image
                style={{height: 200,width: 250,borderRadius: 20,resizeMode:'stretch'}}
                  source={{
                    uri:
                      this.state.artwork,
                  }}
                />  

      <TextTicker
                style={{marginTop:20,fontSize:20,fontWeight:"bold",textAlign:"center"}}
                duration={3000}
                loop
                bounce
                repeatSpacer={100}
                marqueeDelay={3000}>
                  {this.state.title}
      </TextTicker>
      
      <TextTicker
                style={{marginTop:5,marginLeft:20,marginRight: 20,marginBottom:10,fontSize:16,fontWeight:"bold",textAlign:"center",color:'grey'}}
                duration={3000}
                loop
                bounce
                repeatSpacer={100}
                marqueeDelay={3000}>
             {this.state.artist}
      </TextTicker>
                {/*<View style={{flexDirection:'row'}}>
                  
          {!this.state.like 
          ? 
          <MaterialCommunityIcons name="heart-outline" onPress={()=>this.setState({like:true})} size={30} color="black" /> 
          :
          <MaterialCommunityIcons name="heart" size={30} color="red" onPress={()=>this.setState({like:false})} />
        }
                </View>*/}
      <View style={{marginTop: 30}}/> 
      <View style={{width: 300}}>
      <Slider
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
        />
      </View>
      <View style={{marginTop: 30}}/> 
      <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center'}}>
      <MaterialIcons name="replay-30" size={24} color="black" />
        <View key={2} style={{marginLeft: 20}}/> 
        <View key={1} style={{height:50,width: 50,backgroundColor:'#f6f7f8',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
          {/*<MaterialCommunityIcons name="step-backward" size={35} onPress={()=>alert("f")}  color="black" />*/}
          <FontAwesome5 name="backward" size={30} color="black" />
        </View>
        <View key={2} style={{marginLeft: 20}}/> 
        {data}
        <View style={{marginLeft: 20}}/>
          <View key={3} style={{height:50,width: 50,backgroundColor:'#f6f7f8',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
            {/*<MaterialCommunityIcons name="step-forward" size={35} color="black" onPress={()=>alert("f")} />*/}
            <FontAwesome5 name="forward" size={30} color="black" />
          </View>
        <View key={2} style={{marginLeft: 20}}/> 
          <MaterialIcons name="forward-30" size={24} color="black" />
      </View>
      
     
     
      </View>

      </ImageBackground>
      {/*<Image
        style={{height: 200,width: 250,borderRadius: 10,resizeMode:'stretch'}}
          source={{
            uri:
              this.state.artwork,
          }}
        />  
      <View style={{marginTop: 50}}/> 
      <View style={{flexDirection:"row",justifyContent:'space-between'}}>
        <View style={{height:50,width: 50,backgroundColor:'#f6f7f8',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
          <MaterialCommunityIcons name="step-backward" size={35}  color="black" />
        </View>
        <View style={{marginLeft: 80}}/> 
        {data}
        <View style={{marginLeft: 80}}/>
          <View style={{height:50,width: 50,backgroundColor:'#f6f7f8',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
          <MaterialCommunityIcons name="step-forward" size={35} color="black" />
          </View>
      </View>
      <View style={{marginTop: 50}}/> 

                    
       {/*
      <Button
      title="Play"
      onPress={this.playSOund.bind(this)}
      />
      <Button
      title="Pause"
      onPress={this.pauseSound.bind(this)}
       />
      <Button
      title="Stop"
      onPress={this.stopSound.bind(this)}
      />*/}
    </View>
  )
}
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
    },
    container1: {
      justifyContent:'center',
      alignItems:'center',
      flex:1
    },
  })