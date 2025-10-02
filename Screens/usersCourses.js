import { View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CoursesItem from "../components/coursesItem";
import addToCart from "../redux/actions/addToCart";
import removeToCart from "../redux/actions/removeToCart";
const UserCourses = ({ navigation }) => {
  const dispatch = useDispatch();
  const coursesUsers = useSelector((state) => state.course.existingCourses);
  const navigateDetailsPage = (id) => {
    navigation.navigate("Infos", { userId: id });
  };
  const handleAddToCart = (course) => {
    alert("Produit ajouté au panier");

    dispatch(addToCart(course));
  };
  const handleRemoveToCart=(id)=>{
     alert("Produit supprimé du panier");
     dispatch(removeToCart(id))
  }

  return (
    <View>
      <FlatList
        data={coursesUsers}
        renderItem={({ item }) => (
          <CoursesItem
            id={item.id}
            imageUrl={item.image}
            title={item.title}
            price={item.price}
            viewDetails={() => navigateDetailsPage(item.id)}
            onAddToCart={() => handleAddToCart(item)}
            onRemoveToCart={()=>handleRemoveToCart(item.id)}
          />
        )}
      />
    </View>
  );
};

export default UserCourses;
