//react-native_modal 노션에 코드있음
//make login page
import React from 'react';
import { SafeAreaView, View, Text, Button, TextInput } from 'react-native';
import css from './css/custom';

const App = () => {

   const [number, onChangeNumber] = React.useState(null);

  return (
     <SafeAreaView style = {css.back}>
        <View style = {css.vw}>
           <Text style={css.poppop}>
              POP POP
           </Text>
           {/* <PreviewLayout label="flexDirection" value={["row"]}sselectedValue={flexDirection} setSelectedValue={setflexDirection}></PreviewLayout> */}
            <View style={css.testflex}>
               <Text>User ID</Text>
               <TextInput style={css.tbox} onChangeText={onChangeNumber}
                     value={number}
                     placeholder="useless placeholder"
                     keyboardType="numeric">
               </TextInput>
            </View>
        </View>
     </SafeAreaView>
   
  )
}

export default App;