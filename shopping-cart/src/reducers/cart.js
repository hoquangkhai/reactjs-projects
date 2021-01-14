import * as Types from "./../constants/Actiontype";

var data = JSON.parse(localStorage.getItem("CART"));
let innitialSate = data ? data : [];

const findProductInCart = (cart, product) => {
  let index = -1;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (product.id === cart[i].product.id) {
        return (index = i);
      }
    }
  }
  return index;
};

const cart = (state = innitialSate, action) => {
  let index = -1;
  let { product, quantity } = action;
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product: product,
          quantity: quantity,
        });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];

    case Types.DELETE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];

    case Types.UPDATE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity = quantity;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};

export default cart;
