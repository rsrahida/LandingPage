import React, { useEffect, useState } from "react";
import "./BuyPage.css";

const BuyPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function dummyjsonProducts() {
      const apiUrl = "https://dummyjson.com/products";
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        const beautyProducts = data.products.filter(
          (product) => product.category === "beauty"
        );
        setProducts(beautyProducts);
      } catch (error) {
        console.log(error);
      }
    }

    dummyjsonProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId)); 
  };

  return (
    <div className="products">
      <div className="buy-page">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.images[0]}
                className="product-image"
                alt={product.title}
              />
              <h3 className="product-name">{product.title}</h3>
              <p className="product-price">${product.price}</p>
              <button className="addCart" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No beauty products found.</p>
        )}
      </div>
      <div className="cart">
        <h3>Your Cart</h3>
        {cart.length > 0 ? (
          <div>
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <p>{product.title}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Price: ${product.price * product.quantity}</p>
                <button
                  className="removeBtn"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="total">
              <h4>
                Total: $
                {cart.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </h4>
            </div>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default BuyPage;
