import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

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
      toast.success("Created success!");
      setName("");
      setPrice("");
      setContent("");
      setStatus("");
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
              <button type="button" onClick={() => handleAddProduct()}>
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default AddProductForm;
