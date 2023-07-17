import axios from "axios";
import React, { useState } from "react";

function AddProductForm(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  const handleAddProduct = async () => {
    const apiUrl = "http://localhost:4000/products";
    try {
      const res = await axios.post(apiUrl, {
        name: name,
        price: price,
        content: content,
        status: status,
      });
      console.log("Test create: ", res);
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  return (
    <form>
      <table>
        <tbody>
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
                type="submit"
                value="Add"
                onClick={() => handleAddProduct()}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default AddProductForm;
