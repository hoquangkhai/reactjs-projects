import React, { useState } from "react";
import * as Message from './../constants/Message'

function CartItem(props) {
  const {item, onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = props;

  //function
  const showSubTotal = (price, quantity) => (price * quantity)

  const onHandleDelete = product => {
    onDeleteProductInCart(product)
    onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
  }

  const onHandleUpdateQuantity = (product, quantityValue) => {
    if(quantityValue > 0) {
      onUpdateProductInCart(product, quantityValue)
      onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS)
    }
  }
  //function

  return (
    <tr>
      <th scope="row">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="img-fluid z-depth-0"
        />
      </th>
      <td>
        <h5>
          <strong>{item.product.name}</strong>
        </h5>
      </td>
      <td>{item.product.price}$</td>
      <td className="center-on-small-only">
        <span className="qty">{item.quantity}</span>
        <div
          className="btn-group radio-group"
          data-toggle="buttons"
        >
          <label
            onClick={() => onHandleUpdateQuantity(item.product, item.quantity - 1)}
            className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
          >
            <a>—</a>
          </label>
          <label
          onClick={() => onHandleUpdateQuantity(item.product, item.quantity + 1)}
            className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
          >
            <a>+</a>
          </label>
        </div>
      </td>
      <td>{showSubTotal(item.product.price, item.quantity)}$</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-primary waves-effect waves-light"
          data-toggle="tooltip"
          data-placement="top"
          title=""
          data-original-title="Remove item"
          onClick={() => onHandleDelete(item.product)}
        >
          X
        </button>
      </td>
    </tr>
    );
}

export default CartItem;
