import { ADD_TO_CART, CLEAR_CART, REMOVE_TO_CART } from "../constants";
const initialState = {
  cartCourse: [],
  total: 0,
};

const reducersCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const course = action.course;
      const exists = state.cartCourse.find((c) => c.id === action.course.id);
      if (exists) return state;
      return {
        ...state,
        cartCourse: state.cartCourse.concat(course ),
        total: state.total + Number(course.price),
      };
     case REMOVE_TO_CART:
      const id= action.id; 
       const courseToRemove = state.cartCourse.find((course) => course.id === id);

      if (!courseToRemove) return state;
      return{
        ...state,
        cartCourse: state.cartCourse.filter((course)=>course.id !==id),
        total: state.total-Number(courseToRemove.price)
      }
      case CLEAR_CART: 
       return{
        ...state,
        cartCourse: [],
        total: 0,
       }

    default:
      return state;
  }
};

export default reducersCart;
