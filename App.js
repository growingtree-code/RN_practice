//react-native_modal-> code in notion
//make login page
import React from 'react';
import { SafeAreaView, View, Text, Button, TextInput } from 'react-native';
import css from './css/custom';

const App = () => {

   const [number, onChangeNumber] = React.useState(null);

  return (
     <SafeAreaView style = {css.back}>
        <View style = {css.vw}>
           <View>
               <Text style={css.poppop}>
                  POP! POP!
               </Text>
           </View>
           <View style={css.idpw}>
               <View style={css.testflex}>
                  <Text>User ID</Text>
                  <TextInput style={css.tbox} onChangeText={onChangeNumber}
                        value={number}
                        placeholder="user id"
                        keyboardType="numeric">
                  </TextInput>
               </View>
               <View style={css.testflex}>
                  <Text>User ID</Text>
                  <TextInput style={css.tbox} onChangeText={onChangeNumber}
                        value={number}
                        placeholder="user pw"
                        keyboardType="numeric">
                  </TextInput>
               </View>
            </View>
        </View>
        
     </SafeAreaView>
   
  )
}

export default App;