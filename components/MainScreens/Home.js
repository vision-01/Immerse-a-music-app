import React, { Component } from 'react'
import { Text, View, StyleSheet,ImageBackground,ScrollView,TouchableOpacity,FlatList,Image,SafeAreaView } from 'react-native'
import {MaterialCommunityIcons } from '@expo/vector-icons'
import { color } from 'react-native-reanimated';


const songs = [
  {
    title: "death bed",
    artist: "Powfu",
    artwork: "data:image/jpeg;base64,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",
    url: "https://github.com/ShivamJoker/sample-songs/raw/master/death%20bed.mp3",
    id: "1",
  },
  {
    title: "bad liar",
    artist: "Imagine Dragons",
    artwork: "https://i.scdn.co/image/ab67616d0000b273da6f73a25f4c79d0e6b4a8bd",
    url: "https://github.com/ShivamJoker/sample-songs/raw/master/Bad%20Liar.mp3",
    id: "2",
  },
  {
    title: "faded",
    artist: "Alan Walker",
    artwork: "https://i.pinimg.com/originals/f4/e1/06/f4e1064f2f2f06e9c5f71fef985a2281.jpg",
    url: "https://github.com/ShivamJoker/sample-songs/raw/master/Faded.mp3",
    id: "3",
  },
  {
    title: "hate me",
    artist: "Ellie Goulding",
    artwork: "data:image/jpeg;base64,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",
    url: "https://github.com/ShivamJoker/sample-songs/raw/master/Hate%20Me.mp3",
    id: "4",
  },
  {
    title: "Solo",
    artist: "Clean Bandit",
    artwork: "https://upload.wikimedia.org/wikipedia/en/e/e3/Solo_%28Clean_Bandit_song%29.png",
    url: "https://github.com/ShivamJoker/sample-songs/raw/master/Solo.mp3",
    id: "5",
  },
  {
    title: "without me",
    artist: "Halsey",
    artwork: "data:image/jpeg;base64,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",
    url: "https://github.com/ShivamJoker/sample-songs/raw/master/Without%20Me.mp3",
    id: "6",
  },
];

const daily = [
  {
    id: "1",
    title: "Liked Music",
    url: "https://upload.wikimedia.org/wikipedia/en/e/e3/Solo_%28Clean_Bandit_song%29.png"
  },
  {
    id: "2",
    title: "Daily mix 3",
    url: "https://upload.wikimedia.org/wikipedia/en/e/e3/Solo_%28Clean_Bandit_song%29.png"
  },
  {
    id: "3",
    title: "Daily mix 1",
    url: "https://upload.wikimedia.org/wikipedia/en/e/e3/Solo_%28Clean_Bandit_song%29.png"
  },
  {
    id: "4",
    title: "Daily mix 4",
    url: "https://upload.wikimedia.org/wikipedia/en/e/e3/Solo_%28Clean_Bandit_song%29.png"
  },
  {
    id: "5",
    title: "Daily mix 2",
    url: "https://upload.wikimedia.org/wikipedia/en/e/e3/Solo_%28Clean_Bandit_song%29.png"
  },
  {
    id: "6",
    title: "Daily mix 5",
    url: "https://upload.wikimedia.org/wikipedia/en/e/e3/Solo_%28Clean_Bandit_song%29.png"
  },
]

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      day:'',
      bdcolor:'',
      textcolor:'',
      dataSource:null,
      loading: true
    }
  }

  

  render() {
    fetch("https://pulsating-sort.000webhostapp.com/Search/Bollywood.php")
            .then(response => response.json())
            .then((responseJson) => {
                setTimeout(() => {
                    this.setState({
                        dataSource: responseJson,
                        lodaing : false
                    })
                }, 2000)

            })
            .catch(error => console.log(error))
            
    var date, hour
 
    date = new Date();
    hour = date.getHours(); 
    //hour = hour -10
    if(hour>=4 && hour<12){
      this.state.day = 'Morning',
      this.state.bdcolor = 'white',
      this.state.textcolor = "black"
    }
    else if(hour>=12 && hour<16){
      this.state.day = 'Afternoon',
      this.state.bdcolor = 'lightgrey',
      this.state.textcolor = "black"
    }
    else if(hour>=16 && hour<19){
      this.state.day = 'Evening',
      this.state.bdcolor = 'grey',
      this.state.textcolor = "white"
    }
    else{
      this.state.day = "Night",
      this.state.bdcolor = 'black',
      this.state.textcolor = "white"
    }
    
    console.log(this.state.loading);
    

    return (
      <ScrollView nestedScrollEnabled={true} >
        <View style={[styles.container,{backgroundColor:this.state.bdcolor}]}>
        <View style={{marginTop: 40, marginLeft: 30, flexDirection:'row', alignItems:'center'}}>
          <Text style={[styles.text1,{color:this.state.textcolor}]}>Good </Text>
          <Text style={[styles.day,{color:this.state.textcolor}]}>{this.state.day} </Text>
        </View>
        <View style={styles.recent}>
          <Text style={{color:this.state.textcolor,fontSize: 20}}>Recently Played</Text>
          <View>
          <ScrollView style={{marginTop: 10}} 
              horizontal={true} showsVerticalScrollIndicator={false}>
              {
                songs.map((item, index) => (
                  <TouchableOpacity key={item.id} onPress={()=> alert(item.title)} activeOpacity={0.5}>
                    <View style={[styles.card1,{borderWidth: 1,borderColor:this.state.textcolor}]}>
                      <ImageBackground source={{uri: item.artwork}} style={styles.image} imageStyle={{ borderRadius: 10}} >
                        <View style={{backgroundColor: "white",height: 20,width: 60,alignItems:'center',justifyContent:'center', borderRadius: 10,marginBottom: 5,marginRight: 5}}>
                          <Text style = {{color:'black',fontSize: 12,fontWeight: 'bold'}} > Play ▶ </Text>
                        </View>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                ))
              }
            </ScrollView>
          </View>
        </View>
        <View style={{margin: 10,alignItems:'center'}}>
            <FlatList
              numColumns = {2}
              keyExtractor = {(item) => item.id}
              data = {daily}
              renderItem = {({item}) => (
                <View style={{margin: 5}}>
                  <TouchableOpacity style={[styles.dailymix,{borderColor:this.state.textcolor}]} onPress={()=> alert(item.title)}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <Image source={{uri: item.url}} style={styles.image1}/>
                      <Text style={[styles.dailytext,{color:this.state.textcolor}]}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              />
            </View>
              <View style={{margin: 10}}>
                <View style={{margin: 10}}>
                  <Text style={{color:this.state.textcolor,fontSize: 20}}>Recommended for you</Text>
                </View>
                  {this.state.loading ? <View style={{alignItems:'center'}}><FlatList nestedScrollEnabled={true}
                    numColumns = {1}
                    keyExtractor = {(item) => item.id}
                    data = {this.state.dataSource}
                    renderItem = {({item}) => (
                      <View style={{margin: 5}}>
                        <TouchableOpacity style={[styles.dailymix1,{borderColor:this.state.textcolor}]} onPress={()=> this.props.navigation.navigate("Music_player",{
                            id: 86,
                            url: item.url,
                            artwork: item.artwork,
                            title: item.title,
                            artist: item.artist
                          }
                          )}>
                          <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={{uri: item.artwork}} style={styles.image2}/>
                            <View style={{flex:1,alignItems:'center',justifyContent: 'space-between',flexDirection:'row'}}>
                              <View style={{marginLeft: 10}}>
                                <Text style={[styles.dailytext,{color:this.state.textcolor}]}>{item.title}</Text>
                                <Text style={[styles.dailytext,{color:this.state.textcolor}]}>{item.artist}</Text>
                              </View>  
                              <View style={{ flexDirection: 'row',alignItems:'center',marginRight: 10}}>
                                <MaterialCommunityIcons
                                  onPress={()=> alert("sadkjhkj")}
                                  name='dots-vertical'
                                  size={25}
                                  color={this.state.textcolor}
                                />
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    )}
                    /></View> : <Text>Loading</Text>}
                  
                  </View>
                  <View style={{margin:10}}>    
                    <View style={{margin: 10}}>
                      <Text style={{color:this.state.textcolor,fontSize: 20}}>Popular Artists</Text>
                    </View>
                  </View>
              </View>
      </ScrollView>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
  },
  text1:{
    color:'white',
    fontSize: 20
  },
  day:{
    color:'white',
    fontSize: 25,
    fontWeight:'bold'
  },
  recent:{
    margin: 20
  },
  image:{
    height: 130,
    width: 150,
    resizeMode: "cover",
    alignItems:'flex-end',
    justifyContent:'flex-end',
  },
  card1:{
    margin: 5,
    borderRadius: 10
  },
  image1:{
    height: 50,
    width: 50,
    borderRadius: 10
  },
  image2:{
    height: 70,
    width: 70,
    borderRadius: 10
  },
  dailytext:{
    color:'white',
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  dailymix:{
    borderColor:'white',
    borderWidth: 1,
    borderRadius: 10,
    width: 160
  },
  dailymix1:{
    borderColor:'white',
    borderWidth: 1,
    borderRadius: 10,
    height: 71,
    width: 320
  }
})