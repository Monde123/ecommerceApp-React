import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../styles/Colors";
import PaiementsScren from "../Screens/PaiementsScreen";

export default function PaymentNav() {
  const Home = createStackNavigator();
  return (
    <Home.Navigator>
      <Home.Screen
        name="Paiement"
        component={PaiementsScren}
        options={({ navigation }) => ({
          ...styles.headerHome,
          headerLeft: () => (
            <TouchableOpacity
              style={{
                marginLeft: 10,
              }}
              onPress={() => navigation.openDrawer()}
            >
              <AntDesign name="menu" size={24} color={Colors.white} />
            </TouchableOpacity>
          ),
        })}
      />
    </Home.Navigator>
  );
}

const styles = StyleSheet.create({
  headerHome: {
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: Colors.green,
    },
    headerTitle: "Mes paiements",
    headerTitleStyle: {
      color: Colors.white,
      fontSize: 20,
    },
  },
  btn: {
    marginRight: 16,
  },
});
