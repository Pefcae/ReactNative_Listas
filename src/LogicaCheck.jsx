import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const App = () => {
  const[languages, setLanguages] = useState([])

    const options = ['java','py','java2','ruby']

    function pickLanguage(selectedLanguage)
    {

      if(languages.includes(selectedLanguage)){
        setLanguages(languages.filter(language => language!==selectedLanguage))
        return;

      }

      setLanguages(languages=> languages.concat(selectedLanguage))

    }

  return (
    <View style={styles.container}>
      <Text styke={styles.title}>selecciona tu idioma preferido</Text>
        <View style={styles.options}> 
            {options.map(option => (
              <View key={option} style={styles.language} > 
              <TouchableOpacity style={styles.checkBox} onPress={()=> pickLanguage(option) } >
                { languages.includes(option) && <Text style={styles.check}>x</Text> }
              </TouchableOpacity>
                <Text style={styles.languageName}>{option}</Text>
              </View> 
              ))}
        </View> 
    </View>

  )

}

const styles = StyleSheet.create({

  languageName:{
    textTransform:'capitalize',
    fontSize:16,

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

  
  language: {
    flexDirection: 'row',
    marginVertical:10,
  },

    options: {
      alignSelf:'flex-start',
      marginLeft:50,

    },


  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',

  },


});

export default App;