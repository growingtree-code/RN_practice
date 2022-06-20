//react-native_modal-> code in notion
//make login page
import React from 'react';
import { SafeAreaView, View, Text, Button, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import css from './css/custom';

const App = () => {
   const [value, onChangeText] = React.useState(null);
   
  return (
     <SafeAreaView style = {css.back}>
            <View style = {css.naknak}>
                  <Text style={css.poppop}>
                     nak! nak!
                  </Text>
            </View>
            <View style={{flex:5,}}>
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
                     <View style={css.testflex}>
                           <Text onPress={()=> {alert('비밀번호 찾기')}} style={css.unline}>비밀번호 찾기</Text>
                           <Text>  |  </Text>
                           <Text onPress={()=> {alert('회원가입')}} style={css.unline}>회원가입</Text>
                     </View>
               </View>
               
               <View style={css.logbtn}>
                     <Button title="Login" color = "#2c2c2c" 
                        onPress={()=>Alert.alert("로그인버튼 클릭")} />
                     {/* button의 경우 title은 필수이고 color은 블록스타일안먹힘 */}
               </View>
               <View style={css.owner}>
                        <Text onPress={()=> {alert('가맹점주로 시작하기')}} style={css.unline}>가맹점주로 시작하기</Text>
                     </View>
            </View>
     </SafeAreaView>
     
   
  )
}

export default App;