import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../styles/Colors";
import { StyleSheet } from "react-native";
import InfosCourses from "../Screens/detailsCourses";

import MyMenu from "./drawerNav";

import SplashScreenNav from "./SplashScreenNav";
import LoginScreen from "../Screens/auth/login";
const MainNav = createStackNavigator();

//
export default function ScreenNavigation() {
  return (
    <MainNav.Navigator>
    
       <MainNav.Screen
        name="splash"
        component={SplashScreenNav}
        options={{ headerShown: false }}
      />
       <MainNav.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <MainNav.Screen
        name="Menu"
        component={MyMenu}
        options={{ headerShown: false }}
      />
      <MainNav.Screen
        name="Infos"
        component={InfosCourses}
        options={{
          ...styles.headerInfos,
          headerTintColor: "white",
        }}
      />
    </MainNav.Navigator>
  );
}

const styles = StyleSheet.create({
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
