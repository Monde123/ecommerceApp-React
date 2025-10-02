import { StyleSheet, View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import PaiementItem from "../components/paiementItem";

const PaiementsScren = () => {
  const achats = useSelector((state) => state.achats.paymentCourses);

  return (
    <View style={styles.container}>
      <FlatList
        data={achats}
        renderItem={({ item, index }) => (
          <PaiementItem payment={item} index={index} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PaiementsScren;
