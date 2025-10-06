import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyMenu from './drawerNav';
import MyCoursesNav from './MyCoursesNavigation';
import UserCourses from '../Screens/usersCourses';
import HomeNav from './homeNav';
import Colors from '../styles/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

 export default function BottomNav() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarLabelPosition: "beside-icon",
      tabBarActiveTintColor: Colors.green,
      tabBarInactiveTintColor: Colors.dimGray
    }}  >
      <Tab.Screen name="Home" component={HomeNav}   options={{
        headerShown: false,
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
      <Tab.Screen name="Mes courses" component={ MyCoursesNav}  options={{headerShown:false , tabBarIcon: (({focused, color})=>{

          color=focused?Colors.green: Colors.dimGray;
        
        return(<Ionicons name="school" size={24} color={color} />)}),
        
        tabBarLabel : (({children, focused, color})=>{
          color=focused?Colors.green: Colors.dimGray;
            children= focused ? " Mes cours": "";
          return (<Text  style={{color:color, fontSize: 16, fontWeight: "bold",}}>
            {children}
          </Text>)
        }) }} />
    </Tab.Navigator>
  );
}