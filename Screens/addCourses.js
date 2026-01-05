import { Text, View, StyleSheet, TouchableOpacity, Button, Image, Pressable, ScrollView } from 'react-native'
import AddItem from '../components/addItem';
import { useState } from 'react';
import Colors from '../styles/Colors';
import { Course } from '../models/paymentModels';
import { useDispatch } from 'react-redux';
import addCourse from '../redux/actions/addCourse';
import * as ImagePicker from 'expo-image-picker'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const AddCourses = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-flat-cartoon-training-learning-banner-image_182834.jpg');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const imageUrl = "https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-flat-cartoon-training-learning-banner-image_182834.jpg";


  const handleAddCourses = () => {
    const priceD = parseFloat(price) || 0;

    const newCourse = new Course({
      id: Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
      title,
      image,
      description,
      price: priceD.toFixed(2),
      instructorId: '1'
    })
    console.log("'debut d'ajout")
    dispatch(addCourse(newCourse));


    setTitle('');
    setImage(imageUrl);
    setDescription('');
    setPrice(0);
    console.log(newCourse);
    console.log("'Fin d'ajout")

  }
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView>
      <AddItem
        type={'Title'}
        val={title}
        setValue={setTitle}
      />
      <View style={styles.container}>
        <Pressable onPress={() => pickImage()}>
          <MaterialIcons name="add-a-photo" size={24} color="black" />
        </Pressable>
        {

          (image !== imageUrl) && <Image source={{ uri: image }} style={styles.image} /> || <Text style={styles.text}>
            {"Aucune image selectionné pour le moment \n Veuillez en choisir une"}
          </Text>}
      </View>

      <AddItem type={'Description'} setValue={setDescription} val={description} />
      <AddItem type={'Price'} setValue={setPrice} val={price} />


      {(title.trim() !== "" && description.trim() !== "")
        && (
          <TouchableOpacity style={styles.button} onPress={() => handleAddCourses()} >
            <Text style={{
              color: Colors.white, fontWeight: 'bold',
              fontSize: 18,
            }} >
              Ajouter
            </Text>
          </TouchableOpacity>)}

    </ScrollView>
  )

}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: Colors.green,
    alignSelf: "center",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: '90%'
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderWidth: 1,
    alignContent: "center",
    padding: 10,

    borderRadius: 8,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 8,
    alignSelf: 'center'
  },
  text: {
    fontSize: 16,
    color: Colors.grey,
    marginTop: 8,
    textAlign: 'center',
    letterSpacing: 0.5
  }

})
export default AddCourses;