import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <table cellPadding={2} cellSpacing={2} border={1}>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Price</td>
          <td>Content</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => {
          return (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.content}</td>
              <td>{product.status}</td>
              <td>
                <Link to={`products/update/${product.id}`}>
                  <button>Update</button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ProductList;
