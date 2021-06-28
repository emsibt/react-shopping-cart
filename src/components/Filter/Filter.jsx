import React from "react";
import PropTypes from "prop-types";
import "./style.css";
Filter.propTypes = {
  onChangeSizeFilter: PropTypes.func,
  onChangeSortFilter: PropTypes.func,
  products: PropTypes.number,
};

function Filter(props) {
  const { onChangeSortFilter,onChangeSizeFilter,products } = props;
  function handleFilteredSort() {
    const filterValue = document.getElementById("filtered-sort");
    if (!onChangeSortFilter) return;
    onChangeSortFilter(filterValue.value);
  }
  function handleFilteredSize() {
    const filterValue = document.getElementById("filtered-size");
    if (!onChangeSizeFilter) return;
    onChangeSizeFilter(filterValue.value);
  }
  return (
    <div className="filter">
      <div className="filter-result">{products} Products</div>
      <div className="filter-sort">
        Sort{"  "}
        <select id="filtered-sort" onChange={handleFilteredSort}>
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="filter-size">
        Size{"  "}
        <select id="filtered-size" onChange={handleFilteredSize}>
          <option value="all">ALL</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
}
export default Filter;
