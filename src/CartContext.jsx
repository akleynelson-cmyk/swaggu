
 import { createContext, useContext, useState, useEffect } from 'react';
const CartContext = createContext();

export function CartProvider({ children }) {
 const [cart, setCart] = useState(() => {
  try {
    const savedCart = localStorage.getItem('swaggu-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error('Could not load saved cart:', error);
    return [];
  }
});
useEffect(() => {
  localStorage.setItem('swaggu-cart', JSON.stringify(cart));
}, [cart]);
  // Add a product to the cart
  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.cartId === product.cartId
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.cartId === product.cartId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  // Remove a product completely
  const removeFromCart = (cartId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.cartId !== cartId)
    );
  };

  // Change product quantity
  const updateQuantity = (cartId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cartId);
      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.cartId === cartId
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Count all items, including quantities
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total price
  const cartTotal = cart.reduce(
    (total, item) => {
      const price = Number(
        String(item.price).replace(/[^\d]/g, '')
      );

      return total + price * item.quantity;
    },
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
