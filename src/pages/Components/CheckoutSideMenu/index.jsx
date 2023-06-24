import React from 'react';
import { ProductCart } from '../ProductCart';
import './styles.css';
import { GlobalContext } from '../../../context/GlobalContext';
import { Link } from 'react-router-dom';

const CheckoutSideMenu = () => {
  const {
    toggleShopingCart,
    carItems,
    carCount,
    subTotal,
    addNewOrder,
    isUserLogin,
  } = React.useContext(GlobalContext);

  const handleClikCheckout = (items, subTotal, totalItems, isUserLogin) => {
    toggleShopingCart();

    if (isUserLogin) {
      if (totalItems > 0) {
        addNewOrder({
          items,
          subTotal,
          totalItems,
        });
      }
    }
  };

  return (
    <aside className="checkout-menu--container">
      <div className="checkout-menu--head">
        <h2>Shoping cart</h2>
        <span onClick={toggleShopingCart}>x</span>
      </div>

      {carCount > 0 ? (
        carItems?.map((item) => <ProductCart key={item.id} item={item} />)
      ) : (
        <div className="heigth-200 h-20 flex items-end "> Add Products</div>
      )}

      <div className="checkout-menu--footer">
        <div>
          <div className="footer--subtotal">
            <p className="subtotal-items">
              <span>sub-total</span>
              <span>{carCount} items</span>
            </p>
            <p className="subtotal">${subTotal}</p>
          </div>

          <Link to={`${'/my-orders'}`}>
            <button
              disabled={carCount === 0 ? true : false}
              onClick={() =>
                handleClikCheckout(carItems, subTotal, carCount, isUserLogin)
              }
              className="footer--botton"
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export { CheckoutSideMenu };
