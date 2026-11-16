 
import './Bottoms.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';

import { useWishlist } from './WishlistContext.jsx';
import { useCart } from './CartContext.jsx';

function Bottoms() {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const bottoms = [
    {
      id: 1,
      name: 'SWAGGU BAGGY JEAN',
      price: '₦40,000',
      image: '/images/baggy-jean.png'
    },
    {
      id: 2,
      name: 'SWAGGU TRACK PANT',
      price: '₦30,000',
      image: '/images/track-pant.png'
    },
    {
      id: 3,
      name: 'SWAGGU CUSTOM TRACK PANT',
      price: '₦35,000',
      image: '/images/custom-track-pant.png'
    },
    {
      id: 4,
      name: 'SWAGGU BASKETBALL JORT',
      price: '₦32,000',
      image: '/images/basketball-jort.png'
    }
  ];

  return (
    <section id="bottoms" className="product-category">
      <div className="category-heading">
        <h2>SWAGGU BOTTOMS</h2>
        <span></span>
      </div>

      <div className="product-grid">
        {bottoms.map((item) => {
          const wishlistId = `bottoms-${item.id}`;
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
                      category: 'Bottoms'
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
                        cartId: `bottoms-${item.id}`,
                        category: 'Bottoms'
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

export default Bottoms;
