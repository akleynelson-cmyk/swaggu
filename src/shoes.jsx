 
import './Shoes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';

import { useWishlist } from './WishlistContext.jsx';
import { useCart } from './CartContext.jsx';

function Shoes() {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const shoes = [
    {
      id: 1,
      name: 'SWAGGU RUNNER',
      price: '₦45,000',
      image: '/images/shoe1.png',
    },
    {
      id: 2,
      name: 'SWAGGU CLASSIC',
      price: '₦50,000',
      image: '/images/shoe2.png',
    },
    {
      id: 3,
      name: 'SWAGGU STREET',
      price: '₦55,000',
      image: '/images/shoe3.png',
    },
    {
      id: 4,
      name: 'SWAGGU ELITE',
      price: '₦60,000',
      image: '/images/shoe4.png',
    },
  ];

  return (
    <section id="shoes" className="product-category">

      <div className="category-heading">
        <h2>SWAGGU SHOES</h2>
        <span></span>
      </div>

      <div className="product-grid">
        {shoes.map((shoe) => {
          const wishlistId = `shoes-${shoe.id}`;
          const saved = isInWishlist(wishlistId);

          return (
            <div className="product-card" key={shoe.id}>

              <div className="product-image">
                <img src={shoe.image} alt={shoe.name} />

                <FontAwesomeIcon
                  icon={faHeart}
                  className={`wishlist-icon ${saved ? 'active' : ''}`}
                  onClick={() =>
                    toggleWishlist({
                      ...shoe,
                      wishlistId,
                      category: 'Shoes',
                    })
                  }
                />
              </div>

              <div className="product-details">
                <h3>{shoe.name}</h3>

                <div className="product-bottom">
                  <p>{shoe.price}</p>

                  <button
                    type="button"
                    className="add-cart-button"
                    aria-label={`Add ${shoe.name} to cart`}
                    onClick={() =>
                      addToCart({
                        ...shoe,
                        cartId: `shoes-${shoe.id}`,
                        category: 'Shoes',
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

export default Shoes;
