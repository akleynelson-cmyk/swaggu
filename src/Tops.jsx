 
import './Tops.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';

import { useWishlist } from './WishlistContext.jsx';
import { useCart } from './CartContext.jsx';

function Tops() {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const tops = [
    {
      id: 1,
      name: 'SWAGGU GRAPHIC TEE 01',
      price: '₦25,000',
      image: '/images/graphic-tee1.png'
    },
    {
      id: 2,
      name: 'SWAGGU GRAPHIC TEE 02',
      price: '₦25,000',
      image: '/images/graphic-tee2.png'
    },
    {
      id: 3,
      name: 'SWAGGU GRAPHIC TEE 03',
      price: '₦25,000',
      image: '/images/graphic-tee3.png'
    },
    {
      id: 4,
      name: 'SWAGGU POLO',
      price: '₦30,000',
      image: '/images/polo.png'
    }
  ];

  return (
    <section id="tops" className="product-category">
      <div className="category-heading">
        <h2>SWAGGU TOPS</h2>
        <span></span>
      </div>

      <div className="product-grid">
        {tops.map((top) => {
          const wishlistId = `tops-${top.id}`;
          const saved = isInWishlist(wishlistId);

          return (
            <div className="product-card" key={top.id}>
              <div className="product-image">
                <img src={top.image} alt={top.name} />

                <FontAwesomeIcon
                  icon={faHeart}
                  className={`wishlist-icon ${saved ? 'active' : ''}`}
                  onClick={() =>
                    toggleWishlist({
                      ...top,
                      wishlistId,
                      category: 'Tops'
                    })
                  }
                />
              </div>

              <div className="product-details">
                <h3>{top.name}</h3>

                <div className="product-bottom">
                  <p>{top.price}</p>

                  <button
                    type="button"
                    className="add-cart-button"
                    aria-label={`Add ${top.name} to cart`}
                    onClick={() =>
                      addToCart({
                        ...top,
                        cartId: `tops-${top.id}`,
                        category: 'Tops'
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

export default Tops;
