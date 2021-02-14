/*import React from 'react'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './screens/HomeScreen'
import {AppTabNavigator} from './components/AppTabNavigator'
import {SafeAreaProvider} from 'react-native-safe-area-context'
export default function App(){
  return(
    <SafeAreaProvider>
     <AppContainer/>
    </SafeAreaProvider>
  )
}
const switchNavigator = createSwitchNavigator({
HomeScreen: { screen: HomeScreen },
BottamTab: { screen: AppTabNavigator }
})
const AppContainer = createAppContainer(switchNavigator);*/

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from './screens/HomeScreen'
import AddTips from "./screens/AddTips";
import GetTips from "./screens/GetTips";
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class App extends React.Component {
  render() {
    return( 
    <SafeAreaProvider>
      <AppContainer/>
    </SafeAreaProvider>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  AppTips: { screen: AddTips },
  GetTips: { screen: GetTips },
  HomeScreen: { screen: HomeScreen }
},
{
  defaultNavigationOptions:({navigation})=>({
    tabbaricon:()=>{
      const routeName = navigation.state.routeName
      if (routeName='AddTips'){
        return(
          <Image source={require ("./assets/AddTips.png")}
          style={{width:40,height:40}}/>
        )
      }
      if (routeName='GetTips'){
        return(
          <Image source={require ("./assets/GetTips.png")}
          style={{width:40,height:40}}/>
        )
      }
    }
  })
}

);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});