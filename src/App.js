import { useEffect, useState } from "react";
import "./App.css";

import Heading from "./components/heading";
import Cards from "./components/cards";
import Cart from "./components/cart";

const API = "https://dummyjson.com/products?limit=10";

function App() {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API);
      const data = await response.json();
      const products = data.products;

      setProductList(products);
    }

    fetchData();
  }, []);

  const handleAddToCart = (id) => {
    // meg kell keresni azt az elemet, amire rákattintottunk
    const product = productList.find((product) => product.id === id);

    // meg kell nézni, hogy abból az elemből van-e még készleten -> stock
    if (product.stock > 0) {
      // ha igen, akkor a stock értékét csökkenteni kell és
      // a cartList-hez hozzá kell adni a kiválasztott terméket
      setCartList((current) => [...current, product]);

      const newProductList = productList.map((product) => {
        if (product.id === id) {
          product.stock--;
        }

        return product;
      });

      setProductList(newProductList);
    }
  };

  const toggleIsModal = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <div className="App">
      <Heading text="Webshop" />
      {isModal && <p>MEGNYITVA</p>}
      <Cart cartList={cartList} />
      <h2>Products</h2>
      <Cards
        productList={productList}
        handleOnClick={handleAddToCart}
        toggleIsModal={toggleIsModal}
      />
    </div>
  );
}

export default App;
