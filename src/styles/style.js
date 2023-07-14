import { StyleSheet} from 'react-native';

export const GlobalStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:"center",
      justifyContent: 'center',
      paddingTop:30
    },
  });

  export const CalculatorStyle = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:"column",
      width:"100%",
      backgroundColor:'black',
    },
    display:{
      width:"100%",
      backgroundColor:'black',
      height:'35%',
      display:"flex",
      flexDirection:'row',
      alignItems:'flex-end',
      justifyContent:'flex-end'
    },
    tb:{
      borderWidth: 1,
      borderColor: 'red',
      borderStyle: 'solid',
    },
    result:{
      color:"white",
      fontSize:40, 
      padding:10
    },
    pressableButtonArea:{
      display:'flex',
      flexDirection:'row',
      width:"100%",
      flex:1
    },
    pressableButtonOperator:{
      display:'flex',
      flexDirection:'column',
    },
    pressableButtonNumber:{
      flex:1,
      display:'flex',
      flexDirection:'row',
      height:105
    },
    keyOperator:{
      backgroundColor: 'trasparent',
      borderWidth: 0.4,
      borderColor: 'black',
      borderStyle: 'solid',
      flex:1,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      color:"white",
      width:90,
      borderRadius:0
    },
    keyOperatorInner:{
      backgroundColor: 'trasparent',
      borderStyle: 'solid',
      padding:20,
      borderRadius:100
    },
    keyOperatorInnerEqual:{
      backgroundColor:'orange',
      width:50,
      height:50,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:30,
    },

    keyColor:{
      color:"white",
      fontSize:20
    },
    keyColorEq:{
      color:"white",
      fontSize:30
    },
    keyColorOp:{
      color:"orange",
      fontSize:25
    },
    flexCol:{
      flex:1,
      display:"flex",
      flexDirection:'column'
    }
  });