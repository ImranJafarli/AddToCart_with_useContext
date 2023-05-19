import React, { useContext } from "react";
import { CartStoreManagement } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const { cart } = useContext(CartStoreManagement);

  return (
    <div className="home">
      {cart.length === 0 ? (
        <h1>You have no products</h1>
      ) : (
        cart.map((item) => {
          return (
            <ProductCard
              key={item.id}
              id={item.id}
              productName={item.productName}
              price={item.price}
              description={item.description}
              imageUrl={item.imageUrl}
              quantity={item.quantity}
              showAddButton={false}
              showDeleteButton={true}
              addQtyBtn={true}
              delQtyBtn={true}
            />
          );
        })
      )}
    </div>
  );
};

export default Cart;
