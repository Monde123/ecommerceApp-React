import {  TextInput, View } from "react-native"

const AddItem=({val, setValue})=>{
    return(
        <View>
   <TextInput
   
   value={
    val
   }
   placeholder= "entrez la valeur corresspondate"
   onChange={(value)=>{
    if(value.trim().length<1){
        return 'Entrez une valeur non vide'
    }
    setValue(value)
   }}

   style={{
    margin: 10,
    padding: 10
   }}
   />
   
        </View>
    )
}

export default AddItem;