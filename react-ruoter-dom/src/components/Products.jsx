import React from "react";
import { NavLink, Route } from "react-router-dom";
import Product from './Product';

const products = [
  {
    id: 1,
    slug: 'iphone',
    name: "Iphone 10",
    price: 20000000,
  },
  {
    id: 2,
    slug: 'samsung',
    name: "Samsung S8",
    price: 15000000,
  },
  {
    id: 3,
    slug: 'macbook',
    name: "MacBook new",
    price: 400023400,
  },
  {
    id: 4,
    slug: 'cpu',
    name: "CPU maxlever",
    price: 64234312,
  },
];



function Products(props) {
  const {match, location} = props;
  let url = match.url;
  console.log('match:', match)
  console.log('location', location )

//fuction
const showProducts = (products) => {
  let result = null;
  if (products.length > 0) {
    result = products.map((product, index) => {
      return (
        <NavLink to={`${url}/${product.slug}/${product.id}`} key={index}>
          <li className="product__item">
            {product.id} -- {product.name}---{product.price}
          </li>
        </NavLink>
      );
    });
  }
  return result;
};

  return (
    <div className="container">
      <h1>Danh sach cac san pham</h1>
      <ul className="products__list">{showProducts(products)}</ul>
      <Route path='/products/:name/:id' component={Product} />
      {/**  :slug hay :name deu duoc :params */}
    </div>
  );
}

export default Products;
