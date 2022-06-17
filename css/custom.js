import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
   // screen: {
   //   backgroundColor:'yellow',
   //   flex: 1,
   //   alignItems: 'center',
   //   justifyContent: 'center',
   //   height: '100%'
   // },
   back:{
      flex: 1,
      backgroundColor:'#FFCC00',
   },
   vw:{//view
      flex: 1,
      //justifyContent: 'center',
   },
   poppop: {
      fontWeight: 'bold',
      fontSize:80,
      color:'white',
      marginTop:'30%',
      textAlign :'center',//tex전용 가로
   },
   tbox:{
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor:'white'
   },
   testflex:{
      flex:1,
      flexDirection: 'row',//가로로 나열
      width:'100%',
   },
   

 })

 export default styles;