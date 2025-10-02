import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import Colors from "../styles/Colors";
import { useState } from "react";

const PaiementItem = ({ payment, index }) => {
  const [infos, setInfos] = useState(false);
  const toggle = () => {
    setInfos((infos) => !infos);
  };

  const iconsBorder = () =>
    !infos ? (
      <Ionicons name="add-circle-outline" size={24} color="black" />
    ) : (
      <Feather name="minus-circle" size={24} color="black" />
    );
  const { course, date, price } = payment;
  const dateObj = new Date(date);
  const jour = dateObj.toLocaleDateString();
  const heure = dateObj.toLocaleTimeString();

  return (
    <View style={styles.cont}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Paiement : {index + 100}
      </Text>
      <View style={styles.container}>
        <View>
          <Text
            style={{
              color: Colors.green,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {price} £{" "}
          </Text>
        </View>
        <View>
          <Text>{jour}</Text>
          <Text>{heure}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          alignSelf: "flex-end",
          marginTop: 5,
        }}
        onPress={() => toggle()}
      >
        {iconsBorder()}
      </TouchableOpacity>
      {infos && (
        <FlatList
          data={course}
          renderItem={({ item }) => (
            <View>
                <View
                style={{
                    marginTop: 8,
                    marginBottom: 8,

                    backgroundColor: '#251e1eff',
                    height: 2,
                    opacity: 0.5,
                }}
                />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Text>{item.title}</Text>
              <Text
                style={{
                  color: Colors.green,
                  fontWeight: "bold",
                  fontSize: 16,
                  marginTop: 10,
                }}
              >
                {item.price} £{" "}
              </Text>
            </View>
            </View>

          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    alignSelf: "center",
    width: "98%",
    backgroundColor: Colors.white,
    padding: 10,
    marginTop: 12,
    borderRadius: 12,
    elevation: 2,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default PaiementItem;
