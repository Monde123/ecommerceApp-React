import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../styles/Colors";
import AddCourses from "../Screens/addCourses";
import { TouchableOpacity, StyleSheet } from "react-native";
export default function  AddItemNav() {
  const Home = createStackNavigator();
  return (
    <Home.Navigator>
      <Home.Screen
        name="addCourses"
        component={AddCourses}
        options={({ navigation }) => ({
          ...styles.headerHome,
        
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
    headerTitle: "Add courses",
    headerTitleStyle: {
      color: Colors.white,
      fontSize: 20,
    },
  },
  btn: {
    marginRight: 16,
  },
});
