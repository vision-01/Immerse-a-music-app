import React, { Component } from 'react'
import { Text, View ,StyleSheet,ScrollView,TouchableOpacity,Switch} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'


class Account extends Component {

  constructor(props){
    super(props);
    this.state = {
      day:'',
      bdcolor:'',
      textcolor:'',
      textcolor1:'',
      switchValue:false,
      switchValue1:false,
      isEnabled:false,
      isEnabled1:false,
    }
  }

  toggleSwitch = (value) => {
    this.setState({switchValue: value,isEnabled: value})
 }
 
 toggleSwitch1 = (value) => {
  this.setState({switchValue1: value,isEnabled1: value})
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
      <ScrollView>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <View style={[styles.profile,{backgroundColor:this.state.textcolor}]}>
          <View style={[styles.avatar,{backgroundColor:this.state.bdcolor}]}>
            <Text style={{color:this.state.textcolor,fontSize: 30,fontWeight:'bold'}}>A</Text>
          </View>
          <Text style={[styles.username,{color:this.state.bdcolor}]}>Admin</Text>
          </View>
          <View style={styles.icon}>
              <TouchableOpacity onPress={()=>alert("edit profile")}>
                <FontAwesome name="edit" color={this.state.textcolor1} size={30}/>
              </TouchableOpacity>
          </View>
        </View>
        <View style={styles.settings}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={[styles.settinginfo,{color:this.state.textcolor1}]}>Notifications</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={this.state.isEnabled ? "#f5dd4b" : this.state.textcolor}
              ios_backgroundColor="#3e3e3e"
              onValueChange={this.toggleSwitch}
              value={this.state.isEnabled}
            />
          </View>
          <View style={[styles.divider,{backgroundColor:this.state.textcolor1}]}/>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={[styles.settinginfo,{color:this.state.textcolor1}]}>Updates</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={this.state.isEnabled1 ? "#f5dd4b" : this.state.textcolor}
              ios_backgroundColor="#3e3e3e"
              onValueChange={this.toggleSwitch1}
              value={this.state.isEnabled1}
            />
          </View>
         {/*} <View style={[styles.divider,{backgroundColor:this.state.textcolor1}]}/>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={[styles.settinginfo,{color:this.state.textcolor1}]}>Notifications</Text>
            <Text style={[styles.settinginfo,{color:this.state.textcolor1}]}>Switch</Text>
          </View>
          <View style={[styles.divider,{backgroundColor:this.state.textcolor1}]}/>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={[styles.settinginfo,{color:this.state.textcolor1}]}>Notifications</Text>
            <Text style={[styles.settinginfo,{color:this.state.textcolor1}]}>Switch</Text>
          </View>
          <View style={[styles.divider,{backgroundColor:this.state.textcolor1}]}/>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={[styles.settinginfo,{color:this.state.textcolor1}]}>Notifications</Text>
            <Text style={[styles.settinginfo,{color:this.state.textcolor1}]}>Switch</Text>
          </View>*/}
          <View style={[styles.divider,{backgroundColor:this.state.textcolor1}]}/>
        </View>
        <View style={{alignItems:'center'}}>
          <View style={styles.plan}>
            <Text style={styles.plan_title}>Free Music</Text>
            <Text style={styles.plan_sub}>CURRENT PLAN</Text>
          </View>
        </View>


        <View style={styles.languages}>
          <Text style={[styles.settinginfo,{color:this.state.textcolor1}]}>Languages</Text>
          <View style={[styles.language,{borderColor:this.state.textcolor}]}>
            <Text style={[styles.language1,{color:this.state.textcolor1}]}>Select Your Languages for Music</Text>
            <FontAwesome name="chevron-right" color={this.state.textcolor1} size={20}/>
          </View>
        </View>

        <View style={styles.about}>
          <Text style={[styles.settinginfo,{color:this.state.textcolor1}]}>About</Text>
          <View style={{marginTop: 10}}/>
          <View style={[styles.about_style,{borderColor:this.state.textcolor}]}>
            <Text style={[styles.about1,{color:this.state.textcolor1}]}>Version</Text>
            <Text style={[styles.about1_sub,{color:this.state.textcolor1}]}>0.0.1</Text>
          </View>
          <View style={[styles.about_style,{borderColor:this.state.textcolor}]}>
            <Text style={[styles.about1,{color:this.state.textcolor1}]}>Terms and Conditions</Text>
            <Text style={[styles.about1_sub,{color:this.state.textcolor1}]}>All the stuf you need to know</Text>
          </View>
          <View style={[styles.about_style,{borderColor:this.state.textcolor}]}>
            <Text style={[styles.about1,{color:this.state.textcolor1}]}>Privacy Policy</Text>
            <Text style={[styles.about1_sub,{color:this.state.textcolor1}]}>Important for both of us</Text>
          </View>
          <View style={[styles.about_style,{borderColor:this.state.textcolor}]}>
            <Text style={[styles.about1,{color:this.state.textcolor1}]}>Support</Text>
            <Text style={[styles.about1_sub,{color:this.state.textcolor1}]}>Get help from us ...</Text>
          </View>
        </View>

        <View style={{marginTop: 30,alignItems:'center',marginBottom: 30}}>
        <TouchableOpacity onPress={()=>alert("Logout")} style={[styles.logout,{backgroundColor:this.state.textcolor}]}>
          <View style={styles.logout1}>
            <Text style={[styles.logout_text,{color:this.state.bdcolor}]}>LOGOUT</Text>
          </View>
        </TouchableOpacity>
        </View>
      </ScrollView>
      </View>
    )
  }
}

export default Account

const styles = StyleSheet.create({
  profile:{
    marginTop: 50,
    height: 100,
    width: 200,
    backgroundColor:'white',
    justifyContent:'space-around',
    alignItems:'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection:'row'
  },
  avatar:{
    height: 50,
    width: 50,
    backgroundColor:'black',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center'
  },  
  username:{
    fontSize: 20,
    fontWeight:'bold',
  },
  settings:{
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20
  },
  settinginfo:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'black'
  },  
  divider:{
    marginTop: 10,
    marginBottom: 30,
    height: 1,
    backgroundColor:'grey'
  },
  plan:{
    marginTop: 40,
    marginBottom: 40,
    height: 70,
    width: 300,
    backgroundColor:'green',
    borderRadius: 10,
    alignItems:'center',
    justifyContent: 'space-evenly',
    flexDirection:'row'
  },
  plan_title:{
    color:'white',
    fontSize: 24,
    fontWeight:'bold'
  },
  plan_sub:{
    color:'white',
    fontSize: 12,
    fontWeight:'bold'
  },
  icon:{
    justifyContent:'center',
    alignItems:'center',
    marginRight: 30,
    marginTop: 50
  },
  languages:{
    margin: 10,
    marginLeft: 20,
  },  
  logout:{
    height: 50,
    width: 150,
    backgroundColor: 'red',
    borderRadius: 10
  },
  language:{
    marginTop: 20,
    borderWidth: 1,
    borderColor:'white',
    height: 50,
    justifyContent: 'space-around',
    flexDirection:'row',
    alignItems:'center',
    borderRadius: 10
  },  
  language1:{
    fontSize: 14,
    fontWeight: 'bold'
  },
  about:{
    margin: 20,
    justifyContent:'center',
  },
  about1:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  },
  about1_sub:{
    fontSize: 15,
    marginLeft: 20,
  },
  about_style:{
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    borderColor:'white',
    borderRadius: 10,
    borderBottomWidth:1,
    borderLeftWidth:1,
  },
  logout1:{
    alignItems:'center',
    justifyContent:'center',
    flex:1
  },
  logout_text:{
    color:'white',
    fontSize: 20,
    fontWeight:'bold'
  }
})