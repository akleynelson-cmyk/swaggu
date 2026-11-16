 
import './Outerwear.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';

import { useWishlist } from './WishlistContext.jsx';
import { useCart } from './CartContext.jsx';

function Outerwear() {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const outerwear = [
    {
      id: 1,
      name: 'SWAGGU HOODIE',
      price: '₦35,000',
      image: '/images/hoodie.png'
    },
    {
      id: 2,
      name: 'SWAGGU JACKET',
      price: '₦45,000',
      image: '/images/jacket.png'
    },
    {
      id: 3,
      name: 'SWAGGU COAT',
      price: '₦55,000',
      image: '/images/coat.png'
    },
    {
      id: 4,
      name: 'SWAGGU TRACKSUIT',
      price: '₦60,000',
      image: '/images/tracksuit.png'
    }
  ];

  return (
    <section id="outerwear" className="product-category">
      <div className="category-heading">
        <h2>SWAGGU OUTERWEAR</h2>
        <span></span>
      </div>

      <div className="product-grid">
        {outerwear.map((item) => {
          const wishlistId = `outerwear-${item.id}`;
          const saved = isInWishlist(wishlistId);

          return (
            <div className="product-card" key={item.id}>
              <div className="product-image">
                <img src={item.image} alt={item.name} />

                <FontAwesomeIcon
                  icon={faHeart}
                  className={`wishlist-icon ${saved ? 'active' : ''}`}
                  onClick={() =>
                    toggleWishlist({
                      ...item,
                      wishlistId,
                      category: 'Outerwear'
                    })
                  }
                />
              </div>

              <div className="product-details">
                <h3>{item.name}</h3>

                <div className="product-bottom">
                  <p>{item.price}</p>

                  <button
                    type="button"
                    className="add-cart-button"
                    aria-label={`Add ${item.name} to cart`}
                    onClick={() =>
                      addToCart({
                        ...item,
                        cartId: `outerwear-${item.id}`,
                        category: 'Outerwear'
                      })
                    }
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="add-cart-icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Outerwear;
