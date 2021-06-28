import React from "react";
import PropTypes from "prop-types";
import './style.css'
ProductList.propTypes = {
  productList: PropTypes.array,
  onClickAddToCartButton: PropTypes.func,
};

function ProductList(props) {
  const { productList, onClickAddToCartButton } = props;
  function handleAddToCart(product){
    if(!onClickAddToCartButton) return;
    onClickAddToCartButton(product);
  }
  return (
    <ul className="products">
      {productList.map((product) => (
        <li key={product._id}>
          <div className="products__content">
            <a href={"#" + product._id}>
              <img src={product.image} alt={product.title}></img>
              <p>{product.title}</p>
            </a>
          </div>
          <div className="products__price">
            <p>{product.price + ".000 VND"}</p>
            <button className="buy-button" onClick = {() => handleAddToCart(product)}>Add to cart</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
