import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();

const popup = fetchCart();
export const initialState = {
  user: userInfo,
  foodItems: null,
  LabReagents: null,
  cartShow: false,
  cartItems: cartInfo,
};
