import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyMenu from './drawerNav';
import MyCoursesNav from './MyCoursesNavigation';
import UserCourses from '../Screens/usersCourses';
import HomeNav from './homeNav';
import Colors from '../styles/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View } from 'react-native';
import AddCourses from '../Screens/addCourses';
import AddItemNav from './addItemnNav';

const Tab = createBottomTabNavigator();

 export default function BottomNav() {
  return (
    <Tab.Navigator screenOptions={{
     
      tabBarActiveTintColor: Colors.green,
      tabBarInactiveTintColor: Colors.dimGray
    }}  >
      <Tab.Screen name="Home" component={HomeNav}   options={{
        headerShown: false, tabBarLabelPosition: "beside-icon",
        tabBarIcon: (({color, focused})=>{
          color=focused?Colors.green: Colors.dimGray;
          return          (<Ionicons name="home" size={24} color={color} />)}),
         tabBarLabel : (({children, focused, color})=>{
          color=focused?Colors.green: Colors.dimGray;
            children= focused ? " Home": "";
          return (<Text  style={{color:color, fontSize: 16, fontWeight: "bold"}}>
            {children}
          </Text>)
        })

      }} />
       <Tab.Screen name="add" component={AddItemNav}   options={{
        headerShown: false,
        tabBarIcon: (({color, focused})=>{
          color=focused?Colors.green: Colors.dimGray;
           
          return  ( <Ionicons name="add-circle-outline" size={32} color={color} />)}),
         tabBarLabel : (({children, focused, color})=>{
          color=focused?Colors.green: Colors.dimGray;
            children= focused ? " Add Course": "";
          return (
          <View  style={{marginBottom:10}}>
 <Text  style={{color:color, fontSize: 16, fontWeight: "bold"}}>
            {children}
          </Text>
          </View>
         )
        })

      }} />
      <Tab.Screen name="Mes courses" component={ MyCoursesNav}  options={{headerShown:false , tabBarLabelPosition: "beside-icon", tabBarIcon: (({focused, color})=>{
           
          color=focused?Colors.green: Colors.dimGray;
        
        return(<Ionicons name="school" size={24} color={color} />)}),
        
        tabBarLabel : (({children, focused, color})=>{
          color=focused?Colors.green: Colors.dimGray;
            children= focused ? " Mes leçons": "";
          return (<Text  style={{color:color, fontSize: 16, fontWeight: "bold",}}>
            {children}
          </Text>)
        }) }} />
    </Tab.Navigator>
  );
}