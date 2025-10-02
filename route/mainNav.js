import { createStackNavigator } from "@react-navigation/stack";
import UserCourses from "../Screens/usersCourses";
import Colors from "../styles/Colors";
import {
  Alert,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import InfosCourses from "../Screens/detailsCourses";
import CartNav from "./CartNavigation";
const MainNav = createStackNavigator();

//
export default function ScreenNavigation() {
  const action = () => {
    return Alert.alert("Panier", "Vous venez de presser sur un bouton");
  };

  return (
    <MainNav.Navigator>
      <MainNav.Screen
        name="Home"
        component={UserCourses}
        options={({ navigation }) => ({
          ...styles.headerHome,
          headerRight: () => (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("MyCart")}
            >
              <AntDesign name="shopping-cart" size={24} color={Colors.white} />
            </TouchableOpacity>
          ),
        })}
      />
      <MainNav.Screen
        name="Infos"
        component={InfosCourses}
        options={{
          ...styles.headerInfos,
          headerTintColor: "white",
          headerRight: () => {
            return (
              <Pressable
                style={{
                  marginRight: 12,
                }}
              >
                <AntDesign
                  name="shopping-cart"
                  size={24}
                  color={Colors.white}
                />
              </Pressable>
            );
          },
        }}
      />
      <MainNav.Screen
        name="MyCart"
        component={CartNav}
        options={{
          headerShown: false,
        }}
      />
    </MainNav.Navigator>
  );
}

const styles = StyleSheet.create({
  headerHome: {
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: Colors.green,
    },
    headerTitle: "Landing",
    headerTitleStyle: {
      color: Colors.white,
      fontSize: 20,
    },
    headerBackAccessibilityLabel: "Home",
  },
  btn: {
    marginRight: 16,
  },
  headerInfos: {
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: Colors.green,
    },
    headerTitle: "Details",
    headerTitleStyle: {
      color: Colors.white,
      fontSize: 20,
    },
  },
});
