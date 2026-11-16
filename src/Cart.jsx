
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
  faTrash
} from '@fortawesome/free-solid-svg-icons';

import { useCart } from './CartContext.jsx';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    cartTotal
  } = useCart();

  const navigate = useNavigate();

  const formatPrice = (amount) =>
    new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(amount);

  return (
    <section className="cart-page">
      <h1>YOUR SHOPPING CART</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>You haven't added anything to your cart yet.</p>

          <button onClick={() => navigate('/collections')}>
            EXPLORE COLLECTION
          </button>
        </div>
      ) : (
        <div className="cart-layout">

          {/* SELECTED PRODUCTS */}
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.cartId}>

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-product-image"
                />

                <div className="cart-product-info">
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                  <strong>{item.price}</strong>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        updateQuantity(item.cartId, item.quantity - 1)
                      }
                      aria-label="Decrease quantity"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(item.cartId, item.quantity + 1)
                      }
                      aria-label="Increase quantity"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>

                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(item.cartId)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                    Remove
                  </button>
                </div>

                <div className="cart-item-total">
                  {formatPrice(
                    Number(String(item.price).replace(/[^\d]/g, '')) *
                    item.quantity
                  )}
                </div>

              </div>
            ))}
          </div>

          {/* ORDER SUMMARY */}
          <div className="cart-summary">
            <h2>ORDER SUMMARY</h2>

            <div className="summary-line">
              <span>Items ({cart.reduce(
                (total, item) => total + item.quantity, 0
              )})</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>

            <div className="summary-line">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>{formatPrice(cartTotal)}</strong>
            </div>

            <button className="checkout-button" disabled>
              CHECKOUT COMING SOON
            </button>

            <button
              className="continue-shopping"
              onClick={() => navigate('/collections')}
            >
              Continue Shopping
            </button>
          </div>

        </div>
      )}
    </section>
  );
}

export default Cart;
