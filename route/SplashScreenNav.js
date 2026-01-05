import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../Screens/splashScreens";

export default function SplashScreenNav() {
    const Home = createStackNavigator();
    return (
        <Home.Navigator>
            <Home.Screen
                name="splashScreen"
                component={SplashScreen}
                options={
                    {
                        headerShown: false
                    }
                }
            />
        </Home.Navigator>
    );
}

