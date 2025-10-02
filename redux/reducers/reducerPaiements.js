import { ADD_PAYMENT } from "../constants";
const initialState = {
  paymentCourses: [],
};

const reducerPaiements = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PAYMENT:
      const payment = action.payment;
      return {
        ...state,
        paymentCourses: state.paymentCourses.concat(payment),
      };

    default:
      return state;
  }
};

export default reducerPaiements;
