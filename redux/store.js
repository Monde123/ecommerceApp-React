import { combineReducers, createStore } from "redux";
import reducersCart from "./reducers/reducersCart";
import reducerCourses from "./reducers/reducerCourses";
const rootReducers = combineReducers({
  course: reducerCourses,
  cart: reducersCart,
});
const store = createStore(rootReducers);
export default store;
