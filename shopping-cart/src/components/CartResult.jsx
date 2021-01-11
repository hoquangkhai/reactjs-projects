import React from "react";
import * as Message from './../constants/Message'
function CartResult(props) {
  const {cart} = props;

  //function
  const showTotalAmount = (cart) => {
    let total = 0;
    if(cart) {
      for ( let item of cart) {
        total += item.product.price * item.quantity
      }
    }
    return total;
  }
  //function

  return (
    <tr>
      <td colSpan="3">{cart.length > 0 ? '' : Message.MSG_CART_EMPTY}</td>
      <td>
        <h4>
          <strong>Tổng Tiền</strong>
        </h4>
      </td>
      <td>
        <h4>
          <strong>{showTotalAmount(cart)}</strong>
        </h4>
      </td>
      <td colSpan="3">
        <button
          type="button"
          className="btn btn-primary waves-effect waves-light"
        >
          Complete purchase
          <i className="fa fa-angle-right right"></i>
        </button>
      </td>
    </tr>
 );
}

export default CartResult;
