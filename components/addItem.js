import { useState } from "react";
import { TextInput, View, Text } from "react-native";

const AddItem = ({ type, val, setValue }) => {
  const [error, setError] = useState("");

  const handleChange = (value) => {
    value= value.trim()
    if (value === "") {
      setError("Entrez une valeur non vide");
    } else {
      setError("");
    }
    setValue(value);
  };

  return (
    <View>
      <Text style={{ fontSize: 16, marginHorizontal: 10, fontWeight: "bold" }}>
        {type}
      </Text>
      <TextInput
        value={val}
        placeholder="Entrez la valeur correspondante"
        onChangeText={handleChange}
        style={{
          margin: 10,
          padding: 10,
          borderWidth: 1,
          borderRadius: 8,
        }}
      />
      {error !== "" && (
        <Text style={{ color: "red", marginHorizontal: 10 }}>{error}</Text>
      )}
    </View>
  );
};

export default AddItem;
