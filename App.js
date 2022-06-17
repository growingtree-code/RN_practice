//react-native_modal-> code in notion
//make login page
import React from 'react';
import { SafeAreaView, View, Text, Button, TextInput, KeyboardAvoidingView } from 'react-native';
import css from './css/custom';

const App = () => {
   const [value, onChangeText] = React.useState(null);
   
  return (
   
     <SafeAreaView style = {css.back}>
        <View style = {css.vw}>
            <View>
                  <Text style={css.poppop}>
                     nak! nak!
                  </Text>
            </View>
            <KeyboardAvoidingView>
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
                     <Button title="Login" style={css.logbtn}/>
               </View>
            </KeyboardAvoidingView>
        </View>
        
     </SafeAreaView>
     
   
  )
}

export default App;