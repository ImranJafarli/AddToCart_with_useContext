import React, { useContext, useState } from "react";
import { CartStoreManagement } from "../context/CartContext";
import "../styled/productcard.css";

const ProductCard = ({
  id,
  productName,
  price,
  description,
  imageUrl,
  quantity,
  showAddButton = true,
  showDeleteButton = false,
  addQtyBtn = false,
  delQtyBtn = false,
}) => {
  const { addToCart, deleteCart, setTotalPrice } =
    useContext(CartStoreManagement);
  const [qty, setQty] = useState(quantity || 1);

  const handleAddToCart = () => {
    addToCart(id, productName, price, description, imageUrl, qty);
  };

  const handleDeleteCart = () => {
    deleteCart(id);
  };

  const handleAddQty = (currentPrice) => {
    setQty((prevQty) => prevQty + 1);
    setTotalPrice((prev) => prev + currentPrice);
  };

  const handleDelQty = (currentPrice) => {
    if (qty === 1) {
      alert("Mehsul sayi 1 den asagi olmaz");
    } else {
      setQty((prevQty) => prevQty - 1);
      setTotalPrice((prev) => prev - currentPrice);
    }
  };

  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={imageUrl} alt="product" />
      </div>
      <div className="product-card-description">
        <p>{productName}</p>
        <p>{description}</p>
        <span>Price {price}</span>
        {qty && <p>Quantity {qty}</p>}
      </div>
      {showAddButton && <button onClick={handleAddToCart}>Add Cart</button>}
      {showDeleteButton && (
        <button onClick={handleDeleteCart}>Delete Cart</button>
      )}
      {addQtyBtn && <button onClick={() => handleAddQty(price)}>+</button>}
      {delQtyBtn && <button onClick={() => handleDelQty(price)}>-</button>}
    </div>
  );
};

export default ProductCard;
