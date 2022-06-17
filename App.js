//react-native_modal-> code in notion
//make login page
import React from 'react';
import { SafeAreaView, View, Text, Button, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import css from './css/custom';

const App = () => {
   const [value, onChangeText] = React.useState(null);
   
  return (
     <SafeAreaView style = {css.back}>
            <View style = {css.vw}>
                  <Text style={css.poppop}>
                     nak! nak!
                  </Text>
            </View>
               <View style={css.idpw}>
                     <View style={css.testflex}>
                        <Text>User ID</Text>
                        <TextInput style={css.tbox} onChangeText={onChangeText}
                              value={value}
                              placeholder="user id"
                              keyboardType="email-address">
                                 {/* input박스에 커서뒀을때 뜨는 키보드 종류설정code */}
                        </TextInput>
                     </View>
                     <View style={css.testflex}>
                        <Text>User PW</Text>
                        <TextInput style={css.tbox} onChangeText={onChangeText}
                              value={value}
                              placeholder="user pw"
                              keyboardType="default">
                        </TextInput>
                     </View>
                     
               </View>
               <View style={css.logbtn}>
                     <Button title="Login" color = "#2c2c2c" 
                        onPress={()=>Alert.alert("로그인버튼 클릭")} />
                     {/* button의 경우 title은 필수이고 color은 블록스타일안먹힘 */}
               </View>
     </SafeAreaView>
     
   
  )
}

export default App;