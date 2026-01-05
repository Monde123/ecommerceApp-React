import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { View , Text} from "react-native";
import HomeNav from "./homeNav";
import CartNav from "./CartNavigation";
import Colors from "../styles/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import PaymentNav from "./paiementsNav";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import BottomNav from "./BottomNavStack";
import LoginScreen from "../Screens/auth/login";
import { disconnect } from "../Screens/auth/authfunction";

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
              label="Se Déconnecter"
              labelStyle={{
                color: 'red',
                fontSize: 20,
              }}
              icon={({ size, color }) => (
                <Ionicons name="log-out" size={28} color={'red'} />
              )}
              onPress={() => {
                setTimeout(() => {
                  disconnect();
                }, 2000) 
                props.navigation.replace("splash");
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
        name="HomeStack"
        component={BottomNav}
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

    </MainDrawer.Navigator>
  );
}
