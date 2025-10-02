import { ADD_TO_CART } from "../constants";

const addToCart = (course) => ({
  type: ADD_TO_CART,
  course,
});

export default addToCart;
