import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNav from "./homeNav";
import CartNav from "./CartNavigation";
import Colors from "../styles/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MyMenu() {
  const MainDrawer = createDrawerNavigator();

  return (
    <MainDrawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: Colors.green,
        drawerActiveTintColor: Colors.white,
        drawerItemStyle: {
          borderColor:Colors.dimGray,
          borderWidth: 2,
          opacity: 0.8,
          marginBottom: 8
        },
      }}
    >
      <MainDrawer.Screen
        name="HomeScreens"
        component={HomeNav}
        options={{
          headerShown: false,
          title: "Accueil",
          drawerIcon: () => <Ionicons name="home" size={24} />,
        }}
      />
      <MainDrawer.Screen
        name="MyCart"
        component={CartNav}
        options={{
          headerShown: false,
          title: "Mon panier",
          drawerIcon: () => (
            <Ionicons name="cart-sharp" size={24} color="black" />
          ),
        }}
      />
    </MainDrawer.Navigator>
  );
}
