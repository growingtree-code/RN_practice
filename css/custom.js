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
      backgroundColor:'#6666FF',
      //#FFCC00
   },
   naknak:{//view
      flex: 3,
   },
   poppop: {
      // flex:2,
      fontWeight: 'bold',
      fontSize:70,
      color:'white',
      marginTop:'30%',
      textAlign :'center',//text전용 가로
      textDecorationLine : 'underline',
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
     //alignSelf: 'flex-start'
   },
   unline:{
      textDecorationLine : 'underline',
   },
   logbtn:{
      flex: 2,
      color: 'block',
      alignItems: 'center',
      // border : 'border-radious',
      // justifyContent: 'space-between',
   },
   owner:{
      flex:1,
        alignItems: 'center',
     justifyContent: 'center',
     paddingBottom: '10%',
   },
   test:{
    //width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
   },   

 })

 export default styles;