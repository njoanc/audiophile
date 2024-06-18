import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/shared/Nav";
import Home from "./components/pages/home/Home";
import About from "./components/shared/About";
import Footer from "./components/shared/Footer";

// pages
import Headphones from "./components/pages/Headphones";
import Speakers from "./components/pages/Speakers";
import Earphones from "./components/pages/Earphones";
import ProductDetails from "./components/pages/ProductDetails";
import Checkout from "./components/pages/Checkout";
import NotFound from "./components/pages/NotFound";
import Layout from "./components/shared/Layout";

const App = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              cartItemCount={cartItemCount}
              setCartItemCount={setCartItemCount}
            />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route
            path="/products/:slug"
            element={<ProductDetails setCartItemCount={setCartItemCount} />}
          />

          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
