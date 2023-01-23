import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput,Button,FlatList,Modal, TouchableOpacity } from 'react-native';

export default function App() {
  const [task,setTask] = useState('');
  const [tasks,setTasks] = useState([]);
  const [isModalVisible,setIsModalVisible] = useState(false)
  const [selectedTask,setSelectedTask] =  useState(null)


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

  const onHandlerModal=(item)=>{
    setIsModalVisible(!isModalVisible)
    setSelectedTask(item);
  }
  
  const renderItem=({item} )=> (
             <TouchableOpacity  style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
                 <Text style={styles.itemList} > {item.value}  </Text>
              </TouchableOpacity> 

  )

  const keyExtractor=(item)=> item.id;

  const onHandlerCancel =()=>{
    setIsModalVisible(!isModalVisible)
    setSelectedTask(null)
  }

  const onHandlerDelete =()=>{
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id!== selectedTask.id));
    setIsModalVisible(!isModalVisible);

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


        <FlatList
            data= {tasks}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            style={styles.listContainer}
        />

      <Modal visible={isModalVisible} animationType='Slide'>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Task Detail</Text>
              <View style={styles.modalDetailContainer}>
                <Text style={styles.modalDetailMessage}>Seguro que quieren eliminarlo?</Text>
                <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
              </View>
          
          <View style={styles.modalButtonContainer}>
            <Button
              title='Cancel'
              color='#626893' 
              onPress={onHandlerCancel}
            />
            <Button
              title='Delete'
              color='red' 
              onPress={onHandlerDelete}
            />
              
          </View>    
          </View>
         
      </Modal>
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


   modalContainer:{
    justifyContent: 'center',
    alignItems:'center',
    marginTop:50,
    paddingVertical:20,
   },
   modalTitle:{
    fontSize:18,
    fontWeight:'bold',
    marginbottom:10,
   },
   modalDetailContainer:{
    paddingVertical:20,
   },
   modalDetailMessage:{
    fontSize:14,
    color:'212121',
   },
   selectedTask:{
      fontSize:14,
      color:'#212121',
      fontWeight:'bold',
      paddingVertical:10,
      textAlign:'center',
      marginbottom:20,
      },
   modalButtonContainer:{
      width:'70%',
      flexDirection:'row',
      justifyContent: 'space-around',
      marginHorizontal:20,
       },



});
