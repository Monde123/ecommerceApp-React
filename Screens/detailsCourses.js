import { useSelector, useDispatch } from "react-redux";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Colors from "../styles/Colors";
import Entypo from "@expo/vector-icons/Entypo";
import { useLayoutEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import removeToCart from "../redux/actions/removeToCart";
import addToCart from "../redux/actions/addToCart";

const InfosCourses = ({ route, navigation, }) => {
  const dispatch = useDispatch();
  const userId = route.params.userId;
  //verification du panier
  const isInCart = useSelector((state) => state.cart.cartCourse).some(
    (course) => course.id === userId
  );
 ///verification des cours achetés
 const isPaid = useSelector((state) => state.course.allCourses).some(
    (course) => course.id === userId
  );

  const selectedCourse = useSelector(
    (state) => state.course.existingCourses
  ).find((course) => course.id === userId);
  const { image, title, price, description } = selectedCourse;

  const toggleIcons = () => {
    if (isInCart) {
      return dispatch(removeToCart(userId));
    } else {
      return dispatch(addToCart(selectedCourse));
    }
  };

  const ShoppingIcons = () => {
    if (isInCart) {
      return <Entypo name="shopping-cart" size={24} color={Colors.white} />;
    } else {
      return <AntDesign name="shopping-cart" size={24} color={Colors.white} />;
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
    headerRight: isPaid
      ? () => (
          <TouchableOpacity
            onPress={() => toggleIcons()}
            style={{
              marginRight: 12,
            }}
          >
            <ShoppingIcons />
          </TouchableOpacity>
        )
      : null,
  });
  }, [navigation, isInCart, selectedCourse, userId, isPaid]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.line} />
        <View style={styles.element}>
          <Text style={styles.textCourse}>{title}</Text>
          <Text style={styles.price}>{price} £</Text>
        </View>
        <View style={styles.line} />

        <Text
          style={{
            marginVertical: 10,
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          Description
        </Text>
        <Text
          style={{
            fontSize: 18,
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          {description}
        </Text>
      </View>
    </ScrollView>
  );
};

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
  container: {
    marginTop: 12,
    flex: 1,
    marginHorizontal: 12,
    marginBottom: 10,
  },
  image: {
    height: 220,
    width: "100%",
    backgroundColor: Colors.white,
    elevation: 2,
  },
  line: {
    marginTop: 10,
    width: "100%",
    height: 2,
    backgroundColor: Colors.lightGrey,
  },
  element: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
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

export default InfosCourses;
