import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Message from "./components/Message";
import CartContainer from "./containers/CartContainer";
import ProductsContainer from "./containers/ProductsContainer";
function App() {
  return (
    <div>
      <Header />
      <main id="mainContainer">
        <div className="container">
          <ProductsContainer />
          <Message />
          <CartContainer />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
