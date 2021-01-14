import PropTypes from 'prop-types';
import React from "react";
import { connect } from "react-redux";
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import {actDeleteProductInCart, actOnChangeMessage, actUpdateProductInCart} from './../actions/index'
import * as Message from './../constants/Message';

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
              id: PropTypes.number.isRequired,
              name: PropTypes.string.isRequired,
              image: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
              price: PropTypes.number.isRequired,
              inventory: PropTypes.number.isRequired,
              rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,

  onDeleteProductInCart: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onUpdateProductInCart: PropTypes.func.isRequired,

};

// CartContainer.defaultProps = {
//   product: [],
// }



function CartContainer(props) {
  const {cart, onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = props
  //function
  const showCartItem = cart => {
    let result = Message.MSG_CART_EMPTY;
    if (cart) {
      result = cart.map((item, index) => {
        return (
          <CartItem
          key={index}
          item={item}
          index={index}
          onDeleteProductInCart={onDeleteProductInCart}
          onChangeMessage={onChangeMessage}
          onUpdateProductInCart={onUpdateProductInCart}
          />
        )
      })
    }
    return result;
  }


  const showTotalAmount = cart => {
    let result = null;
    if (cart) {
      result = <CartResult cart={cart} />
    }
    return result;
  }
  //function


  return (
    <Cart >
      {showCartItem(cart)}
      {showTotalAmount(cart)}
    </Cart>
  );
}


const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: product => {
      dispatch(actDeleteProductInCart(product))
    },

    onChangeMessage: message => {
      dispatch(actOnChangeMessage(message))
    },
    onUpdateProductInCart: (product, quantity) => {
      dispatch(actUpdateProductInCart(product, quantity))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
