import { createContext, useState } from "react";

export const CartStoreManagement = createContext();

export const CartStore = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products] = useState([
    {
      id: 1,
      productName: "Shoes",
      price: 400,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      imageUrl:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80",
    },
    {
      id: 2,
      productName: "Jacket",
      price: 100,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      imageUrl:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 3,
      productName: "Jeans",
      price: 200,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      imageUrl:
        "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 4,
      productName: "Beanie",
      price: 50,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      imageUrl:
        "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
    },
  ]);

  const addToCart = (
    id,
    productName,
    price,
    description,
    imageUrl,
    quantity
  ) => {
    const existingId = cart.find((item) => item.id == id);
    if (existingId) {
      const getNonExisting = cart.filter((item) => item.id !== existingId.id);
      setCart([
        ...getNonExisting,
        { ...existingId, quantity: existingId.quantity + 1 },
      ]);
    } else {
      setCart([
        ...cart,
        { id, productName, price, description, imageUrl, quantity: 1 },
      ]);
    }
  };

  const deleteCart = (id) => {
    const filteredData = cart.filter((item) => item.id !== id);
    setCart(filteredData);
  };

  const value = { cart, addToCart, deleteCart };

  return (
    <CartStoreManagement.Provider
      value={{
        products,
        addToCart,
        cart,
        deleteCart,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </CartStoreManagement.Provider>
  );
};
