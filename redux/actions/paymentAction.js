import { ADD_PAYMENT } from "../constants"

const addPayment=(payment)=>({
    type: ADD_PAYMENT,
    payment
})

export default addPayment