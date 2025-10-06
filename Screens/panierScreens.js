import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import CoursesItem from "../components/coursesItem";
import addToCart from "../redux/actions/addToCart";
import removeToCart from "../redux/actions/removeToCart";
import { useDispatch, useSelector } from "react-redux";
import Colors from "../styles/Colors";
import Payment, { Course } from "../models/paymentModels";
import addPayment from "../redux/actions/paymentAction";
import clearCart from "../redux/actions/clearCart";
import updateCourses from "../redux/actions/updateCourses";

const PanierScreens = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartCourse);
  const totalPrice = useSelector((state) => state.cart.total);

  // payment
  const courses = () => cart.map((v) => new Course(v));

  const handlePayment = () => {
    const payment = new Payment({
      course: courses(),
      date: new Date(),
      price: totalPrice.toFixed(2),
    });
    setTimeout(() => {
      Alert.alert(
        "Paiement",
        "Appuiez sur suivant pour effectuer le paiement",
        [
          {
            text: "Suivant",
            onPress: () => {
              dispatch(addPayment(payment));
              dispatch(clearCart());
              dispatch(updateCourses(courses()))
              navigation.goBack();
            },
          },
        ]
      );
    }, 200);
  };
  //end payment

  //navigation state
  const navigateDetailsPage = (id) => {
    navigation.navigate("Infos", { userId: id });
  };
  const handleAddToCart = (course) => {
    alert("Produit ajouté au panier");

    dispatch(addToCart(course));
  };
  const handleRemoveToCart = (id) => {
    alert("Produit supprimé du panier");
    dispatch(removeToCart(id));
  };

  if (cart.length === 0) {
    return (
      <View
        style={{
          marginTop: 15,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16,
          }}
        >
          Panier vide
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: Colors.lightOrange,
          }}
        >
          Veuillez ajouter
        </Text>
      </View>
    );
  }
  return (
    <View>
      <View style={styles.body}>
        <FlatList
          data={cart}
          renderItem={({ item }) => (
            <CoursesItem
              id={item.id}
              imageUrl={item.image}
              title={item.title}
              price={item.price}
              viewDetails={() => navigateDetailsPage(item.id)}
              onAddToCart={() => handleAddToCart(item)}
              onRemoveToCart={() => handleRemoveToCart(item.id)}
            />
          )}
        />
      </View>
      <View style={styles.bottomBtn}>
        <View style={styles.priceContainer}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Price
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            {totalPrice.toFixed(2)} £
          </Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => handlePayment()}>
          <Text style={styles.textBtn}>Payer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBtn: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.white,
    paddingVertical: 10,
    justifyContent: "space-around",
    alignItems: "center",

    flexShrink: 1,
    flexDirection: "row",
    elevation: 2,
    paddingBottom: 20,
  },
  body: {
    height: "90%",
    flexGrow: 1,
    marginBottom: 80,
  },
  btn: {
    backgroundColor: Colors.lightOrange,
    padding: 10,

    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 25,
  },
  priceContainer: {
    marginLeft: 10,
    flexDirection: "column",
  },
});
export default PanierScreens;
