import { combineReducers, createStore } from "redux";
import reducerCourses from "./reducers/reducerCourses";
import reducersCart from "./reducers/reducersCart";
const rootReducers=combineReducers({
    course: reducerCourses,
    cart: reducersCart,
})
const store= createStore(
    rootReducers
)
export default store