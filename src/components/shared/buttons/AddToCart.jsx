import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/cartSlice";

const AddToCart = ({ product, setCartItems, setCartItemCount }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);

    // Get existing cart items from local storage
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    // Find the current product in the cart
    const existingCartItemIndex = existingCartItems.findIndex(
      (item) => item.slug === product.slug
    );

    if (existingCartItemIndex !== -1) {
      // If the product is in the cart, update its quantity
      existingCartItems[existingCartItemIndex].quantity = newQuantity;

      // Store the updated cart items in local storage
      localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addItem({
        ...product,
        quantity,
        cartImage: product.image.cart,
      })
    );

    // Get existing cart items from local storage
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the current product is already in the cart
    const existingCartItemIndex = existingCartItems.findIndex(
      (item) => item.slug === product.slug
    );

    if (existingCartItemIndex !== -1) {
      // If the product is already in the cart, update its quantity
      existingCartItems[existingCartItemIndex].quantity += quantity;
    } else {
      // If the product is not in the cart, add it to the cart
      existingCartItems.push({
        ...product,
        quantity,
        cartImage: product.image.cart,
      });
    }

    // Store the updated cart items in local storage
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

    // Update the state of the cartItems in the Cart component
    setCartItems(existingCartItems);
    setCartItemCount(
      existingCartItems.reduce((acc, item) => acc + item.quantity, 0)
    );
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex justify-between gap-4 max-w-[296px]">
      <div className="flex gap-[20px] place-items-center bg-paleSilver mx-auto px-6">
        <button
          type="button"
          className="opacity-25 py-4 focus:outline-none "
          onClick={handleDecrement}
        >
          -
        </button>
        <input
          className="bg-paleSilver py-4 w-4 text-center focus:outline-none text-subtitle"
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button
          type="button"
          className="opacity-25 py-4 focus:outline-none "
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <motion.button
        className="bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite px-[30px] py-[15px] md:max-w-[160px]"
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={handleAddToCart}
      >
        Add To Cart
      </motion.button>
    </div>
  );
};

export default AddToCart;
