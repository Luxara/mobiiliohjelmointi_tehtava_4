import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';


export default function App() {
  
  const [listItem, setListItem] = useState('');

  const [data, setData] = useState([]);


  const addItem = () => { 
     setData([...data, {key: listItem }]);
  }

  const clearList = () => { 
    setData([ ]);
 }

  return (
    <View style={styles.container}>

      <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <TextInput style={styles.input} onChangeText={listItem=>setListItem(listItem)} value={listItem}/>
      </View>

      <View style={{position: 'relative', top:30}}>
      <View style={{flex:1, flexDirection: 'row', alignItems:'center', justifyContent:'space-around', marginTop:'-50%'}}>
      <Button onPress={clearList} title='CLEAR'/>
      <Button onPress={addItem} title='ADD'/>
      </View>
      </View>

      <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <Text>Shopping List</Text>
        <FlatList
        data={data}
        renderItem={({item}) =><Text>{item.key}</Text>}  
        keyExtractor={(item, index) => index.toString()}
        />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  input:{
    width:200,
    borderColor:'gray',
    borderWidth:1
  }
});