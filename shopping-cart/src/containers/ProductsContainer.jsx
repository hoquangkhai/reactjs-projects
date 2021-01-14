import React from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import Product from './../components/Product'
import PropTypes from 'prop-types';
import {actAddToCart, actOnChangeMessage} from './../actions/index'

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              name: PropTypes.string.isRequired,
              image: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
              price: PropTypes.number.isRequired,
              inventory: PropTypes.number.isRequired,
              rating: PropTypes.number.isRequired,
            })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired,
};

// ProductsContainer.defaultProps = {
//   product: [],
// }



function ProductsContainer(props) {
  const {products, onAddTocart, onChangeMessage} = props;

  //function
    const showProduct = products => {
    let result;
    if(products) {
      result = products.map((product, index) => {
        return <Product
        key={index}
        product={product}
        onAddTocart={onAddTocart}
        onChangeMessage={onChangeMessage} />
      });
    }
    return result;
  }
  //function


  return (
    <Products>{showProduct(products)}</Products>
  );
}


const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTocart: (product) => {
      dispatch(actAddToCart(product, 1))
    },
    onChangeMessage: message => {
      dispatch(actOnChangeMessage(message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductsContainer);
