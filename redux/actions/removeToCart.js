import { REMOVE_TO_CART } from "../constants";

const removeToCart=(id)=>({
    type: REMOVE_TO_CART, 
    id
});
export default removeToCart;