import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Library extends Component {

  constructor(props){
    super(props);
    this.state = {
      day:'',
      bdcolor:'',
      textcolor:''
    }
  }

  render() {
    var date, hour
 
    date = new Date();
    hour = date.getHours(); 
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

    return (
      <View style={{backgroundColor:this.state.bdcolor,flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:this.state.textcolor,fontSize: 20}}> Library </Text>
      </View>
    )
  }
}

export default Library