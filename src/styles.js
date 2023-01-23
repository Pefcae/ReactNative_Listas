import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
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
  
    check:{
        alignSelf:'center',
      },
     
      checkBox: {
        width:25,
        height:25,
        borderWidth:2,
        borderColor: 'green',
        marginRight:5,
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