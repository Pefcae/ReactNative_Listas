import React, { useState} from 'react';
import {  Text, View, TextInput,Button,FlatList,Modal, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import {styles} from './styles'
import { AddItem } from './components';
import {colors} from './constants/theme/colors';

const  App = () => {
  const [task,setTask] = useState('');
  const [tasks,setTasks] = useState([]);
  const [isModalVisible,setIsModalVisible] = useState(false)
  const [selectedTask,setSelectedTask] =  useState(null)
  const [isChecked, setChecked] = useState(false);


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
             
                  <TouchableOpacity style={styles.checkBox} onPress={()=> pickTask(item) } >
                    { tasks.includes(item) && <Text style={styles.check}>x</Text> }
                  </TouchableOpacity>                

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


  function pickTask(selectedTask)
  {

    if(tasks.includes(selectedTask)){
      setTasks(tasks.filter(task => task!==selectedTask))
      return;

    }

    setTasks(tasks=> tasks.concat(selectedTask))

  }



   // console.warn('tasks',tasks)

  return (
    <View style={styles.container}>
      <AddItem
      buttonColor={colors.primary}
      buttonText='add'
      onHandlerChange={onHandlerChange}
      onHandlerSubmit={onHandlerSubmit}
      placeholder='add a new task'
      task={task}
      />
      
      
          <View style={styles.containerElement}>
        
            <FlatList
                data= {tasks}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.listContainer}
          
            />
         
          
           
        </View>



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



export default App;