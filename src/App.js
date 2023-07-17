import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:4000/products";

    const getProducts = async () => {
      try {
        let res = await axios.get(apiUrl);
        setProducts(res && res.data ? res.data : []);
      } catch (error) {
        console.log("Error: ", error.message);
      }
    }

    getProducts();
  }, [])

  return (
    <div className="App">
      <h1>Demo Working with Restful API</h1>
      <AddProductForm />
      <ProductList products={products} />
    </div>
  );
}

export default App;
