import React from "react";
import { useEffect, useState } from "react";
import Filter from "./components/Filter/Filter";
import data from "./data.json";
import ProductList from "./features/product/component/productList";
function App() {
  const [products, setProducts] = useState([]);
  const [cardItems, setCardItems] = useState([]);
  const [filter, setFilter] = useState("");
  const [renderProductList, setRenderProductList] = useState(data.products);
  useEffect(() => {
    setProducts(renderProductList);
  }, [filter]);
  function handleChangeSortFilter(sortFilter) {
    // console.log(sortFilter);
    const sortedProductList = [renderProductList["0"]];
    try {
      for (const product in renderProductList) {
        let current = renderProductList[product];
        let j = parseInt(product) - 1;
        if (sortFilter === "lowest") {
          while (j >= 0) {
            if (sortedProductList[j].price > current.price) {
              sortedProductList[j + 1] = sortedProductList[j];
              j--;
            } else break;
          }
          sortedProductList[j + 1] = current;
        } else if (sortFilter === "highest") {
          while (j >= 0) {
            if (sortedProductList[j].price < current.price) {
              sortedProductList[j + 1] = sortedProductList[j];
              j--;
            } else break;
          }
          sortedProductList.splice([j + 1], 1, current);
        } else sortedProductList[product] = data.products[product];
      }
    } catch (error) {
      console.log(error);
    }
    setRenderProductList(sortedProductList);
    setFilter(sortFilter);
  }
  function handleChangeSizeFilter(sizeFilter) {
    // console.log(sizeFilter);
    const newProductList = data.products.filter(
      (eachProduct) =>
        sizeFilter === "all" ||
        JSON.stringify(eachProduct.availableSizes).includes(sizeFilter)
    );
    setRenderProductList(newProductList);
    setFilter(sizeFilter);
  }
//Add to cart button
  function handleAddToCart(product){
    console.log(product._id)
    //creat card list
    const cardList =cardItems.slice();
    let alreadyInCart= false;
    cardList.forEach((item) =>{
      if(item._id === product._id){
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart) {
      cardList.push({...product, count: 1});
    }
    setCardItems(cardList)
    console.log(cardItems)
  }
  return (
    <div className="grid-container">
      <header>
        <a href="/"> React Shopping App </a>
      </header>
      <main>
        <div className="content">
          <div className="productList">
            <Filter
              products={products.length}
              onChangeSortFilter={handleChangeSortFilter}
              onChangeSizeFilter={handleChangeSizeFilter}
            />
            <ProductList productList={products}
             onClickAddToCartButton = {handleAddToCart} 
            />
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
