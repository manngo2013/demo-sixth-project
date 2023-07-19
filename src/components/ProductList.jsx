import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  const handleDeleteProduct = async (product) => {
    const apiUrl = `http://localhost:4000/products/${product.id}`;

    try {
      const res = await axios.delete(apiUrl);
      alert("Deleted success");
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

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
                &nbsp;
                <button
                  type="button"
                  onClick={() => handleDeleteProduct(product)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ProductList;
