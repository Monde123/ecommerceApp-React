import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../styles/Colors";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import PanierScreens from "../Screens/panierScreens";
import { useDispatch, useSelector } from "react-redux";
import clearCart from "../redux/actions/clearCart";
const Cart = createStackNavigator();
export default function CartNav() {
  const cart = useSelector((state) => state.cart.cartCourse);

  const dispatch = useDispatch();
  const action = () => {
    dispatch(clearCart());
    Alert.alert("Attention", "Panier vidé avec succès");
  };

  return (
    <Cart.Navigator>
      <Cart.Screen
        name="Cart"
        component={PanierScreens}
        options={({ navigation }) => ({
          ...styles.headerPanier,
          headerTintColor: Colors.white,
          headerLeft: () => (
            <TouchableOpacity
              style={{
                marginLeft: 10,
              }}
              onPress={()=>navigation.openDrawer()}
            >
              <MaterialIcons name="menu" size={24} color={Colors.white} />
            </TouchableOpacity>
          ),
          headerRight: () => {
            if (cart.length > 0) {
              return (
                <TouchableOpacity style={styles.btn} onPress={() => action()}>
                  <MaterialIcons name="delete" size={26} color={Colors.white} />
                </TouchableOpacity>
              );
            }
          },
        })}
      />
    </Cart.Navigator>
  );
}

const styles = StyleSheet.create({
  headerPanier: {
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: Colors.green,
    },
    headerTitle: "Mon panier",
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
