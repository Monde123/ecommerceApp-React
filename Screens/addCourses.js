
import { Text, View , StyleSheet, TouchableOpacity} from 'react-native'
import AddItem from '../components/addItem';
import { useState } from 'react';
import Colors from '../styles/Colors';
import { Course } from '../models/paymentModels';
import { useDispatch } from 'react-redux';
import addCourse from '../redux/actions/addCourse';

const  AddCourses=()=> {
    const [title, setTitle]=useState('');
    const [image, setImage]=useState('');
    const [description, setDescription]=useState('');
    const [price, setPrice]=useState("");
    const dispatch= useDispatch();



const handleAddCourses=()=>{
  const  priceD =  parseFloat(price)||0; 

    const newCourse= new Course({
        id:  Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
        title,
        image, 
        description,
      price:   priceD.toFixed(2),
      instructorId: '1'  
    })
    console.log("'debut d'ajout")
   dispatch(addCourse(newCourse));
  

    setTitle('');
    setImage('');
    setDescription('');
    setPrice(0);
    console.log(newCourse);
    console.log("'Fin d'ajout")

}
  
    return (
      <View>
        <AddItem
        type={'Title'}
        val={title}
        setValue={setTitle}
        />
        <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
          <AddItem  type={'Image'}
          val={image}
        setValue={setImage}
        />
        <AddItem type= {'Description'}  setValue={setDescription} val={description}/>
        <AddItem type= {'Price'}  setValue={setPrice} val={price} />


         {(title.trim()!== "" && description.trim() !=="" && image.trim() !=="" )
         &&(
        <TouchableOpacity  style={styles.button}  onPress={()=>handleAddCourses()} >
            <Text style={{color: Colors.white, fontWeight: 'bold',
                fontSize: 18, 
            }} >
                Ajouter
            </Text>
        </TouchableOpacity>)}
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
    },
    container: {

    }
  
})
export default AddCourses;