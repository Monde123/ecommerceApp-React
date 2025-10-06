
import { Text, View , StyleSheet, TouchableOpacity} from 'react-native'
import AddItem from '../components/addItem';
import { useState } from 'react';
import Colors from '../styles/Colors';

const  AddCourses=()=> {
    const [title, setTitle]=useState('');
    const [image, setImage]=useState('');
    const [description, setDescription]=useState('');


const handleAddCourses=()=>{
    console.log(title, image, description);
}
  
    return (
      <View>
        <AddItem
        type={'Title'}
        setValue={setTitle}
        />
          <AddItem  type={'Image'}
        setValue={setImage}
        />
        <AddItem type= {'Description'}  setValue={setDescription}/>

        <TouchableOpacity  style={styles.button}  onPress={()=>handleAddCourses()} >
            <Text>
                Ajouter
            </Text>
        </TouchableOpacity>
      </View>
    )
  
}

const styles = StyleSheet.create({
    button:{
        margin:10,
        padding: 10,
        backgroundColor: Colors.green,
        alignSelf: "center",
        borderRadius: 8,
        alignItems: "center", 
        justifyContent: "center",
        width: '90%'
    }
  
})
export default AddCourses;