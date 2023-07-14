import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import { CalculatorStyle } from "../styles/style";
import { TouchableButton} from "../components/components";

export const Calculator = () => {
  const [result, setResult] = useState("0");
  const operations = ["/", "*", "-", "="];
  const checkOperations = ["/", "*", "-", "+"];
  function computeResult(input){
    if(input=='.'){
        
        if(result.toString().includes(".")){
        const res=result.split(/[-+*/]/);
        res[res.length-1].includes(".")?setResult(result.toString()):setResult(result.toString()+input.toString())
        }
        else{
            setResult(result.toString()+input.toString())
        }
    }
    if(typeof input === "number"){
        if(result===0){
            setResult(input)
        }
        else{
            setResult(result.toString()+input.toString())
        }
    }
  }
  function computeResultsOperation(input){
    checkOperations.includes(input)? setResult(result.toString()+input.toString()):setResult(result.toString());
    if(input=="="){
        setResult(eval(result))
    }
  }
  function additionalInputs(input){

    if(input=="C"&&result.length>0){
        const arr=result.split("")
        arr.pop()
        setResult(arr.join(""))
    }else{
        setResult(0)
    }
  }

  useEffect(()=>{
    setResult(0);
  },[])
  return (
    <SafeAreaView style={CalculatorStyle.container}>
      {/*Display Area */}
      <View style={[CalculatorStyle.display]}>
        <Text style={CalculatorStyle.result}>{result}</Text>
      </View>
      {/*Buttons Area */}
      <View style={[CalculatorStyle.pressableButtonArea]}>
        {/*Number Area */}
        <View style={[CalculatorStyle.flexCol]}>
        <View style={[CalculatorStyle.pressableButtonNumber]}>
            <TouchableButton value={"C"} index={1} operator={true} functionVal={additionalInputs}/>
            <TouchableButton value={"+"} index={2} operator={true} functionVal={computeResultsOperation}/>
            <TouchableButton value={"AC"} index={3} operator={true} functionVal={additionalInputs}/>
        </View>

        <View style={[CalculatorStyle.pressableButtonNumber]}>
            <TouchableButton value={7} index={7} functionVal={computeResult}/>
            <TouchableButton value={8} index={8} functionVal={computeResult}/>
            <TouchableButton value={9} index={9} functionVal={computeResult}/>
        </View>

        <View style={[CalculatorStyle.pressableButtonNumber]}>
            <TouchableButton value={4} index={4} functionVal={computeResult}/>
            <TouchableButton value={5} index={5} functionVal={computeResult}/>
            <TouchableButton value={6} index={6} functionVal={computeResult}/>
        </View>

        <View style={[CalculatorStyle.pressableButtonNumber]}>
            <TouchableButton value={1} index={1} functionVal={computeResult}/>
            <TouchableButton value={2} index={2} functionVal={computeResult}/>
            <TouchableButton value={3} index={3} functionVal={computeResult}/>
        </View>
        <View style={[CalculatorStyle.pressableButtonNumber]}>
            <TouchableButton value={""} index={10} operator={true} functionVal={computeResult}/>
            <TouchableButton value={0} index={11} functionVal={computeResult}/>
            <TouchableButton value={"."} index={12} functionVal={computeResult}/>
        </View>
        </View>
        {/*Operator Area */}
        <View style={[CalculatorStyle.pressableButtonOperator]} >
          {operations.map((op, i) => {
            return <TouchableButton value={op} index={i} operator={true} functionVal={computeResultsOperation}/>;
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};
