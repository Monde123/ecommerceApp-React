import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";

import Colors from "../styles/Colors";
import { useSelector } from "react-redux";
const MyCoursesItem = ({
  
payment, navigation}) => {
  const { course } = payment;
  const viewDetails=(id)=>{
    navigation.navigate("Infos", { userId: id });
  };
  
  return (
<View>
  {course.map((item, index) => {
    const pourcentage = Math.floor(Math.random() * 100) / 100;
    return (
      <View style={styles.container} key={index}>
        <TouchableOpacity onPress={() => viewDetails(item.id)}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.textCourse}>{item.title}</Text>
        </View>
        <View style={styles.footer}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            My Progression
          </Text>
          <Text style={{ fontSize: 16, color: Colors.green }}>
            {(pourcentage * 100).toFixed(2)} %
          </Text>
        </View>
        <View style={styles.progress}>
          <View style={{ backgroundColor: Colors.green, height: 5, borderRadius: 16, width: `${pourcentage * 100}%` }} />
        </View>
      </View>
    );
  })}
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
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textCourse: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.lightOrange,
    overflow: "hidden",
  },
 
  progress: {height: 5, backgroundColor:"#bab6b6ff", marginHorizontal: 8, borderRadius:16, width: '90%', alignSelf: 'center', marginBottom:8,}
});
export default MyCoursesItem;
