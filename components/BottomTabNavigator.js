import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator 
        screenOptions={({route})=>{
          tabBarIcon:({ focused,color,size})=>{
            let iconName;
            if(route.name === "Transaction"){
              iconName = "book"

            }else if(route.name === "Search"){
              iconName = "search"
            }
            return(
              Ionicons
              name= {iconName}
              size={size}
              color={color}
            );
          }
        }}>
          <Tab.Screen name="Transaction" component={TransactionScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
