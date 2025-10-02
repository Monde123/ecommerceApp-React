import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../styles/Colors";

import UserCourses from "../Screens/usersCourses";

export default function HomeNav() {
  const Home = createStackNavigator();
  return (
    <Home.Navigator>
      <Home.Screen
        name="HomeNav"
        component={UserCourses}
        options={({ navigation }) => ({
          ...styles.headerHome,
          headerLeft: () => (
            <TouchableOpacity
             style={{
                marginLeft: 10,
              }}
              onPress={()=>navigation.openDrawer()}
            >
              <AntDesign name="menu" size={24} color={Colors.white} />
            </TouchableOpacity>
          ),
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
    </Home.Navigator>
  );
}

const styles = StyleSheet.create({
  headerHome: {
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: Colors.green,
    },
    headerTitle: "Catalogue",
    headerTitleStyle: {
      color: Colors.white,
      fontSize: 20,
    },
    headerBackAccessibilityLabel: "Home",
  },
  btn: {
    marginRight: 16,
  },
});
