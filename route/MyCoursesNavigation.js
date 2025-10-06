import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../styles/Colors";

import MyCourseScreens from "../Screens/myCourses";

export default function MyCoursesNav() {
  const MyCourses = createStackNavigator();
  return (
    <MyCourses.Navigator>
      <MyCourses.Screen
        name="MyCoursesNav"
        component={MyCourseScreens}
        options={({navigation}) => ({
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
        
        })}
      />
    </MyCourses.Navigator>
  );
}

const styles = StyleSheet.create({
  headerHome: {
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: Colors.green,
    },
    headerTitle: "Mes cours",
    headerTitleStyle: {
      color: Colors.white,
      fontSize: 20,
    },
  },
  btn: {
    marginRight: 16,
  },
});
