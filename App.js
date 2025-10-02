import { Provider } from "react-redux";
import store from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";

import ScreenNavigation from "./route/mainNav";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ScreenNavigation />
      </NavigationContainer>
    </Provider>
  );
}
