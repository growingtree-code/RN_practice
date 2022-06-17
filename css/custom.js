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
      flex: 3,
   },
   poppop: {
      // flex:2,
      fontWeight: 'bold',
      fontSize:70,
      color:'white',
      marginTop:'30%',
      textAlign :'center',//text전용 가로
   },
   idpw:{
      flex:2,
      margin:10,
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
      padding:'1%',//숫자커질수록 idpw와 멀어짐
      flex: 2,
      color: 'block',
      alignItems: 'center',
      // border : 'border-radious',
      // justifyContent: 'space-between',
   },
   

 })

 export default styles;