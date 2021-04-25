import { CartActionTypes } from "./cart.types";

export function toggleCartHidden() {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };
}

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
