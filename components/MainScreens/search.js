import React, { Component } from 'react'
import { Text, View ,StyleSheet,ScrollView,TouchableOpacity,TextInput,FlatList,Switch,ImageBackground} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import Pop from '../../assets/pop.png'
import Electronic from '../../assets/electronic.png'
import Bollywood from '../../assets/bollywood.png'
import HipHop from '../../assets/hip-hop.png'
import Summer from '../../assets/summer.png'
import Romance from '../../assets/romance.png'
import Punjabi from '../../assets/punjabi.png'
import Party from '../../assets/party.png'
import Tamil from '../../assets/tamil.png'
import Telugu from '../../assets/Telugu.png'
import Wellness from '../../assets/wellness.png'
import Rock from '../../assets/rock.png'
import Chill from '../../assets/chill.png'
import Meditaion from '../../assets/meditaion.png'
import Sleep from '../../assets/sleep.png'
import Soul from '../../assets/soul.png'
import Gamming from '../../assets/gamming.png'
import Jazz from '../../assets/jazz.png'


const Song_type=[
  { name:"Pop",id:1,bg:Pop },
  { name:"Electronic",id:2,bg:Electronic },
  { name:"Bollywood",id:3,bg:Bollywood },
  { name:"Hip-Hop",id:4,bg: HipHop },
  { name:"Summer",id:5 ,bg:Summer},
  { name:"Romance",id:6 ,bg: Romance},
  { name:"Punjabi",id:7 ,bg: Punjabi},
  { name:"Party" ,id:8 ,bg: Party},
  { name:"Tamil" ,id:9,bg: Tamil},
  { name:"Telugu" ,id:10,bg: Telugu},
  { name:"Wellness" ,id:12,bg: Wellness},
  { name:"Rock" ,id:13,bg: Rock},
  { name:"Chill" ,id:15,bg: Chill},
  { name:"Meditation" ,id:16,bg: Meditaion},
  { name:"Sleep" ,id:17,bg: Sleep},
  { name:"Soul" ,id:18,bg: Soul},
  { name:"Gamming" ,id:19,bg: Gamming},
  { name:"Jazz" ,id:20,bg: Jazz},
]

class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
      day:'',
      bdcolor:'',
      textcolor:'',
      textcolor1:''
    }
  }
  

  render() {
    var date, hour
 
    date = new Date();
    hour = date.getHours(); 
    if(hour>=4 && hour<12){
      this.state.day = 'Morning',
      this.state.bdcolor = 'white',
      this.state.textcolor = "black",
      this.state.textcolor1 = "black"
    }
    else if(hour>=12 && hour<16){
      this.state.day = 'Afternoon',
      this.state.bdcolor = 'lightgrey',
      this.state.textcolor = "black",
      this.state.textcolor1 = "black"
    }
    else if(hour>=16 && hour<19){
      this.state.day = 'Evening',
      this.state.bdcolor = 'grey',
      this.state.textcolor = "white",
      this.state.textcolor1 = "white"
    }
    else{
      this.state.day = "Night",
      this.state.bdcolor = 'black',
      this.state.textcolor = "white",
      this.state.textcolor1 = "white"
    }

    return (
      <View style={{backgroundColor:this.state.bdcolor,flex:1}}>
        <View style={[styles.search,{backgroundColor:this.state.textcolor}]}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <TextInput 
              style={[styles.input,{color:this.state.bdcolor}]}
              placeholder="Search ..."
              placeholderTextColor={this.state.bdcolor}
              underlineColorAndroid='transparent'
            />
            <FontAwesome name="search" color={this.state.bdcolor} size={20}/>
          </View>
        </View>
        <View style={styles.allsong}>
          <Text style={[styles.allsong_title,{color:this.state.textcolor}]}>Browse all</Text>
          <View style={styles.song_type_list}>
          <FlatList
              numColumns = {2}
              keyExtractor = {(item) => item.id}
              data = {Song_type}
              renderItem = {({item}) => (
                <TouchableOpacity onPress={()=> alert(item.name)} activeOpacity={0.5}>
                  <View style={[styles.card1,{borderWidth: 1,borderColor:this.state.textcolor}]}>
                    <ImageBackground source={item.bg} style={styles.card} imageStyle={{ borderRadius: 10}} >
                      <View style={{backgroundColor: "white",height: 25,alignItems:'center',justifyContent:'center',borderBottomRightRadius: 7}}>
                        <Text style = {{color:'black',fontSize: 15,fontWeight: 'bold'}} > {item.name} </Text>
                      </View>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
                )}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default Search;

const styles = StyleSheet.create({
  search:{
    height: 50,
    marginLeft: 30,
    marginRight: 30,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black',
    marginTop: 50,
    borderRadius:10
  },
  input:{
    width: 250,
    fontSize: 20,
    marginRight: 10
  },
  allsong:{
    margin: 20
  },
  allsong_title:{
    color:'white',
    fontWeight: 'bold',
    fontSize: 20,
    fontWeight:'bold'
  },
  song_type_list:{
    alignItems:'center',
    justifyContent:'center',
    marginTop: 20,
    marginBottom: 130
    
  },
  card:{
    height: 100,
    width: 150,
    resizeMode: "contain",
    alignItems:'flex-end',
    justifyContent:'flex-end',
  },
  card1:{
    margin: 5,
    borderRadius: 10
  },
  image: {
    borderRadius: 10
  },
})