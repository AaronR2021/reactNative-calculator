import React from "react";
import {Text,TouchableOpacity,View} from "react-native";
import { StatusBar } from "expo-status-bar";
import {CalculatorStyle} from '../styles/style'

export const Statusbar = () => {
  return (
    <StatusBar
      style="dark-content"
      backgroundColor="black" //status bar color
      hidden={false} //always shown=>else it goes up automatically
    />
  );
};

export const TouchableButton = ({value,index,operator=false,functionVal}) => {
  return (
    <View style={CalculatorStyle.keyOperator}>
      {
        value=='='?
        <TouchableOpacity style={CalculatorStyle.keyOperatorInnerEqual} onPress={()=>functionVal(value)}>
        <Text 
           key={index}
           style={CalculatorStyle.keyColorEq}
           >{value}</Text>
           </TouchableOpacity>:<TouchableOpacity style={CalculatorStyle.keyOperatorInner} onPress={()=>functionVal(value)}>
        <Text 
           key={index}
           style={operator?CalculatorStyle.keyColorOp:CalculatorStyle.keyColor}
           >{value}</Text>
           </TouchableOpacity>
       } 

    </View>
  );
};



