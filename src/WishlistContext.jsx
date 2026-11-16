 
import { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (product) => {
    setWishlist((currentWishlist) => {
      const alreadySaved = currentWishlist.some(
        (item) => item.wishlistId === product.wishlistId
      );

      if (alreadySaved) {
        return currentWishlist.filter(
          (item) => item.wishlistId !== product.wishlistId
        );
      }

      return [...currentWishlist, product];
    });
  };

  const isInWishlist = (wishlistId) =>
    wishlist.some((item) => item.wishlistId === wishlistId);

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
