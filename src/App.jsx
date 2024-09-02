import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "./App.css";  // Importing the custom CSS file

const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.pinimg.com/736x/84/ee/48/84ee48dbb18b783a991c2a22103b5649.jpg",
    quantity: 0,
  },
  {
    id: 2,
    title: "iPhone X",
    description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg",
    quantity: 0,
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://admin.hyperce.io/assets/thumbnail__12__preview.jpg?w=800",
    quantity: 0,
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vOb2ZhCIQwB9XVj2gGrc2UOHcX4N30jyOA&s",
    quantity: 0,
  },
  {
    id: 5,
    title: "Huawei P30",
    description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYAIGZ5tikU6YFJOrx4Ae25G-ULJ-Ccqvkg&s",
    quantity: 0,
  },
];

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="text-center">Shopping Cart</h1>
        </header>
        <div className="content">
          <ProductList products={products} />
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export default App;