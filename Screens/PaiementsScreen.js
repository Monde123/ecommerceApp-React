import { StyleSheet, View } from "react-native"
import { useSelector } from "react-redux"

const PaiementsScren= ()=>{
    const achats= useSelector(state=state.achats.paymentCourses);

    return(

        <View>


        </View>
    )
}
const styles= StyleSheet.create({
container: {
    flex: 1, 
}

})