//react-native_modal-> code in notion
//make login page
import React, {useState} from 'react';
import { SafeAreaView, View, Text, Button, TextInput, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import css from './css/custom';

const App = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

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
                        {/* <Text>User ID</Text> */}
                        <TextInput
                              style={css.tbox}
                              onChangeText={setEmail}
                              value={email}
                              placeholder="user id"
                              keyboardType="email-address">
                        </TextInput>
                     </View>
                     <View style={css.testflex}>
                        {/* <Text>User PW</Text> */}
                        <TextInput
                              style={css.tbox}
                              onChangeText={setPassword}
                              value={password}
                              placeholder="user pw"
                              keyboardType="default"
                              secureTextEntry
                              >
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
                        onPress={()=>onpres} />
                     <TouchableOpacity style={css.test}>
                        <Text >test</Text>
                     </TouchableOpacity>
               </View>
               <View style={css.owner}>
                        <Text onPress={()=> {alert('가맹점주로 시작하기')}} style={css.unline}>메인화면</Text>
                     </View>
            </View>
     </SafeAreaView>
     
   
  )
}

export default App;