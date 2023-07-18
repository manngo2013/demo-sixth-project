import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./updateProduct.css";
import axios from "axios";

function UpdateProduct(props) {
  const params = useParams();
  const productId = params.productId;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Handle current product data by productId
    const apiUrl = `http://localhost:4000/products/${productId}`;

    const getProduct = async () => {
      try {
        let res = await axios.get(apiUrl);
        setName(res.data ? res.data.name : "");
        setPrice(res.data ? res.data.price : "");
        setContent(res.data ? res.data.content : "");
        setStatus(res.data ? res.data.status : "");
      } catch (error) {
        console.log("Error: ", error.message);
      }
    };

    getProduct();
  }, [productId]);

  const handleUpdateProduct = async () => {
    const apiUrl = `http://localhost:4000/products/${productId}`;

    try {
      const res = await axios.put(apiUrl, {
        name: name,
        price: price,
        content: content,
        status: status,
      });
      alert("Update success");
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  return (
    <form className="page-wrapper">
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>{productId}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Price</td>
            <td>
              <input
                type="number"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Content</td>
            <td>
              <input
                type="text"
                value={content}
                onChange={(event) => setContent(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Status</td>
            <td>
              <input
                type="text"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input
                type="button"
                value="Save"
                onClick={() => handleUpdateProduct()}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default UpdateProduct;
