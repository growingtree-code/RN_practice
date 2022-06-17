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
   },
   poppop: {
      fontWeight: 'bold',
      fontSize:70,
      color:'white',
      marginTop:'30%',
      textAlign :'center',//tex전용 가로
   },
   idpw:{
      margin:100,
      padding:10,
   },
   tbox:{
      height: 40,
      width: 200,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor:'white'
   },
   testflex:{
      flexDirection: 'row',//가로로 나열
        alignItems: 'center',
     justifyContent: 'center',
   },
   logbtn:{
      margin:100,
      padding:20,
   },
   

 })

 export default styles;