import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import Colors from "../styles/Colors";
import MyCoursesItem from "../components/myCoursesItem";


const MyCourseScreens = ({ navigation }) => {
  const myCourses = useSelector((state) => state.achats.paymentCourses);

  //navigation state
 
 

  if (myCourses.length === 0) {
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
          Vous n'avez aucun cours disponible
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginTop:8,
            color: Colors.lightOrange,
          }}
        >
          Veuillez effectuer un achat
        </Text>
      </View>
    );
  }
  return (
    
      <View style={styles.body}>
        <FlatList
          data={myCourses}
          renderItem={({ item }) => (
            <MyCoursesItem
            payment={item}
            navigation={navigation}
             
            />
          )}
        />
      </View>
  
  );
};

const styles = StyleSheet.create({

  body: {
  flex: 1,
  marginBottom: 80,
  },
  

});
export default MyCourseScreens;
