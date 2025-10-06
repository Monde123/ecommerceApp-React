import {  TextInput, View, Text } from "react-native"

const AddItem=({type, val, setValue})=>{
    return(
        <View>
            <Text  style={
                {fontSize:16, marginHorizontal:10, fontWeight: "bold"}
            } >
{type}
            </Text>
   <TextInput
   
   value={
    val
   }
   placeholder= "entrez la valeur correspondante"
   onChangeText={(value)=>{
  
    if(value===""){
        return 'Entrez une valeur non vide'
    }
    setValue(value);
   }}

   style={{
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius:8,
   }}
   />
   
        </View>
    )
}

export default AddItem;