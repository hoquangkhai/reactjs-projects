import React from 'react';




function Product(props) {
  let {match} = props;
  console.log(match)
  let name = match.params.name;
  let id = match.params.id;
  return (
    <div>

    <h3>Day la component chi tiet san pham  co ten la {name} voi id la {id} </h3>
    </div>
  );
}

export default Product;