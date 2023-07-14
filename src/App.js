import { StyleSheet, View,SafeAreaView } from 'react-native';
import {GlobalStyle}  from '../src/styles/style.js';
import {Statusbar,TestText} from '../src/components/components.js';
import {Calculator} from '../src/components/Calculator.js';

export default function App() {
  return (
    <>
      <Statusbar/>
    <SafeAreaView style={GlobalStyle.container}>
      <Calculator/>
    </SafeAreaView>
    </>

  );
}
