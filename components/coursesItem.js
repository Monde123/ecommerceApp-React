import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Colors from "../styles/Colors";
import { useSelector } from "react-redux";
import Entypo from "@expo/vector-icons/Entypo";
const CoursesItem = ({
  id,
  imageUrl,
  title,
  price,
  viewDetails,
  onAddToCart,
  onRemoveToCart,
}) => {
  const isInCart = useSelector((state) => state.cart.cartCourse).some(
    (course) => course.id === id
  );

  const toggleIcons = () => {
    if (isInCart) {
    return  onRemoveToCart;
    } else {
    return  onAddToCart;
    }
  };

  const ShoppingIcons = () => {
    if (isInCart) {
      return <Entypo name="shopping-cart" size={24} color={Colors.green} />;
    } else {
      return (
        <AntDesign name="shopping-cart" size={24} color={Colors.dimGray} />
      );
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={viewDetails}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.textCourse}>{title}</Text>
        <Text style={styles.price}>{price} £</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={viewDetails}>
          <Feather name="eye" size={24} color={Colors.green} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleIcons()}>
          <ShoppingIcons />
        </TouchableOpacity>
        
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    elevation: 10,
    margin: 10,
    borderRadius: 16,
  },
  image: {
    height: 200,
    backgroundColor: Colors.white,
    marginBottom: 8,
    padding: 8,
    borderRadius: 16,
  },
  footer: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textCourse: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.lightOrange,
    overflow: "hidden",
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.green,
  },
});
export default CoursesItem;
