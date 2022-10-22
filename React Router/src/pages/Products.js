import React from "react";
import { Link } from "react-router-dom";

function Products(props) {
  return (
    <React.Fragment>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1"> Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet </Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Products;
