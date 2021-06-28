import React from "react";
import { useEffect, useState } from "react";
import data from "./data.json";
import ProductList from "./features/product/component/productList";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data.products);
  }, []);
  console.log(products);
  return (
    <div className="grid-container">
      <header>
        <a href="/"> React Shopping App </a>
      </header>
      <main>
        <div className="content">
          <div className="productList">
            <ProductList productList={products} />
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
