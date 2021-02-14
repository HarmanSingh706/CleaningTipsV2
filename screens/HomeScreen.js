import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import MyHeader from '../components/MyHeader'


export default class HomeScreen extends Component{
render(){
    return(
        <View>
            <MyHeader title="Cleaning Tips"/>
        </View>
    )
}
}