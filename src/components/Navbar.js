import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartStoreManagement } from "../context/CartContext";
import "../styled/navbar.css";

const Navbar = () => {
  const { cart,totalPrice,setTotalPrice } = useContext(CartStoreManagement);
  const [totalQuantity, setTotalQuantity] = useState(0);
 

  useEffect(() => {
    const sumAllProducts = cart.map((item) => {
      return item.quantity * item.price;
    });
    const sumPrice = sumAllProducts.reduce(
      (prev, current) => prev + current,
      0
    );
    const allQuantity = cart.map((item) => {
      return item.quantity;
    });
    const sumQuantity = allQuantity.reduce(
      (prev, current) => prev + current,
      0
    );

    setTotalPrice(sumPrice);
    setTotalQuantity(sumQuantity);
  }, [cart]);

  return (
    <header>
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart {totalQuantity} Summary AZN{totalPrice}
            </Link>
          </li>
          <li>
            <Link to="/create-product">Create</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
