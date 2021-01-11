import React from "react";

function Products(props) {
  const {children} = props;
  return (
    <section className="section">
    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
    <div className="row">
      {children}
    </div>
  </section>
  );
}

export default Products;
