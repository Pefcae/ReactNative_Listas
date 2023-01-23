import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default function App() {
  const [task,setTask] = useState('');
  const [tasks,setTasks] = useState([]);

  const onHandlerChange=(text)=>{
    setTask(text)
  }
  
  const onHandlerSubmit=()=>{
      setTasks([
        ...tasks,
        {
          id:Math.random().toString(),
          value:task
        }
      ])
      setTask('');
    }
  
  
   // console.warn('tasks',tasks)

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}> 
           <TextInput 
           style={styles.input} 
           placeholder='add a new task'
           autoComplete='off'
           autoCorrect={false}
           autoCapitalize='none'
           value={task}
           onChangeText= {onHandlerChange} 
           />
         <Button disabled={!task} title='add' color='#626893' onPress={onHandlerSubmit}/>
         
        </View>
        <View style={styles.listContainer}>
          {
            tasks.map((item) => (
              <View key={item.id} style={styles.itemContainer}>
              <Text style={styles.itemList} > {item.value}  </Text>
              </View> 

            ))
          }
          </View> 
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  inputContainer: {
    marginTop: 50,
    justifyContent:'space-between',
    marginHorizontal:20,
    flexDirection:'row'
    
  },
  input: {
    width:'80%',
    borderBottomColor: '#626893',
    borderBottomWidth :1,
    height:40,
    color:'#212121'
  },
  listContainer:{
    flexDirection:'column',
    marginHorizontal:20,
    marginTop:40,

  },
  itemContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#626893',
    marginbottom: 10,
    borderRadius: 10,
  },
  itemList:{
    fontSize:20,
    color: '#ffffff',
    fontWeight:'bold',

  },
});
