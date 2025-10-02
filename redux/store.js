import { combineReducers, createStore } from "redux";
import reducersCart from "./reducers/reducersCart";
import reducerCourses from "./reducers/reducerCourses";
import reducerPaiements from "./reducers/reducerPaiements";
const rootReducers = combineReducers({
  course: reducerCourses,
  cart: reducersCart,
  achats: reducerPaiements,
});
const store = createStore(rootReducers);
export default store;
