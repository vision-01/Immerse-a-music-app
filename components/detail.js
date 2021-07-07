import React, { Component } from 'react'
import { Text, View ,StyleSheet,FlatList,TouchableOpacity} from 'react-native'


const Data=
[
    {
        name: "Admin",
        info: "Name: Admin \n Roll Number: 18033000 \n Department: CSE"
    },
    {
        name: "Root",
        info: "Name: Root \n Roll Number: 18033010 \n Department: ECE"
    },
    {
        name: "Lorem",
        info: "Name: Lorem \n Roll Number: 18033001 \n Department: CSE"
    },
    {
        name: "Ipsum",
        info: "Name: Ipsum \n Roll Number: 18033002 \n Department: EEE"
    },
    {
        name: "admin123",
        info: "Name: admin123 \n Roll Number: 18033050 \n Department: CSE"
    },
]

export default class _Flatlist extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.name}>Userdetails</Text>
                <View style={styles.divider}/>
                <FlatList
                data={Data}
                renderItem={({item}) => 
                <TouchableOpacity onPress={()=>alert(item.info)}>
                    <View style= {styles.list}>
                    <Text style={styles.name1}>{item.name}</Text>
                </View>  
                </TouchableOpacity>  
            }
                />
            </View>
        )
    }
}

const styles  = StyleSheet.create({
    container:{
        marginTop: 30
    },
    name:{
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 10
    },
    divider:{
        height: 1,
        backgroundColor:'lightgrey',
        marginBottom: 10,
        marginTop: 5
    },
    list:{
        height: 50,
        marginBottom: 10,
        borderWidth:1,
        borderColor:"black",
        margin: 10,
        justifyContent:"center"
    },
    name1:{
        fontWeight:"bold",
        fontSize: 15,
        marginLeft: 15
    },
    info:{
        marginLeft: 15,
        marginRight: 15
    }
})