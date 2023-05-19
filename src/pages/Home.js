import React, { useContext } from "react";
import { CartStoreManagement } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import "../styled/home.css";

const Home = () => {
  const { products } = useContext(CartStoreManagement);

  return (
    <div className="home">
      {products.map((item) => {
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            productName={item.productName}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
            quantity={item.quantity}
          />
        );
      })}
    </div>
  );
};

export default Home;
