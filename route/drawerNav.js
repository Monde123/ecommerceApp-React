import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { View } from "react-native";
import HomeNav from "./homeNav";
import CartNav from "./CartNavigation";
import Colors from "../styles/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import PaymentNav from "./paiementsNav";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function MyMenu() {
  const MainDrawer = createDrawerNavigator();

  return (
    <MainDrawer.Navigator
      drawerContent={(props) => (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
          <DrawerItemList {...props} />

          {/* Bloc du bas */}
          <View
            style={{
              marginTop: "auto",
              borderTopWidth: 1,
              borderColor: Colors.dimGray,
            }}
          >
            <DrawerItem
              label="Paramètres"
              icon={({ size, color }) => (
                <Ionicons name="settings" size={size} color={color} />
              )}
              onPress={() => {
                props.navigation.navigate("Settings");
              }}
            />
          </View>
        </DrawerContentScrollView>
      )}
      screenOptions={{
        drawerActiveBackgroundColor: Colors.green,
        drawerActiveTintColor: Colors.white,
        drawerItemStyle: {
          borderColor: Colors.dimGray,
          borderWidth: 2,
          opacity: 0.8,
          marginBottom: 8,
        },
      }}
    >
      <MainDrawer.Screen
        name="HomeScreens"
        component={HomeNav}
        options={{
          headerShown: false,
          title: "Accueil",
          drawerIcon: ({ color, size, focused }) => {
            focused ? (color = Colors.white) : (color = Colors.dimGray);
            size = focused ? 28 : 24;
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
      <MainDrawer.Screen
        name="MyCart"
        component={CartNav}
        options={{
          headerShown: false,
          title: "Mon panier",
          drawerIcon: ({ color, size, focused }) => {
            focused ? (color = Colors.white) : (color = Colors.dimGray);
            size = focused ? 28 : 24;
            return <Ionicons name="cart-sharp" size={size} color={color} />;
          },
        }}
      />
      <MainDrawer.Screen
        name="MyPayment"
        component={PaymentNav}
        options={{
          headerShown: false,
          title: "Mes achats",
          drawerIcon: ({ color, size, focused }) => {
            focused ? (color = Colors.white) : (color = Colors.dimGray);
            size = focused ? 28 : 24;
            return <MaterialIcons name="payment" size={size} color={color} />;
          },
        }}
      />

      <MainDrawer.Screen
        name="Settings"
        component={HomeNav /* TODO: remplacer par ton écran Paramètres */}
        options={{
          headerShown: false,
          title: "Paramètres",
          drawerItemStyle: { display: "none" }, // Masqué dans la liste
        }}
      />
    </MainDrawer.Navigator>
  );
}
