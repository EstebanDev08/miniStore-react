import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { NotFound } from '../NotFound';

function MyOrder() {
  const idOrder = window.location.pathname.split('/')[3];

  const { getOrderById } = useContext(GlobalContext);

  const order = getOrderById(idOrder);

  console.log(order);

  return order !== undefined ? (
    <section className="myorders-container bg-slate-50 h-auto mb-8">
      <div className="myorders--header flex items-center gap-8 pt-8">
        <h2 className="header-title">My Order</h2>
        <p className="text-gray-500 text-sm">
          view your pending delivered, <br /> and returned orders here.
        </p>
      </div>

      <div className="myorder-card--container bg-white p-8 pb-0 mt-10 shadow-lg">
        <div className="card--titles flex justify-between pb-4 border-b h-16 items-center">
          <p className="bg-slate-100 rounded-xl p-2 px-5">
            <span className="font-bold">Order</span>{' '}
            <span className="text-blue-600 pl-3">{`#${order?.id}`}</span>
          </p>
          <p className="text-gray-500 text-xs">
            Fecha:<span>{order?.date}</span>
          </p>
          <p className="text-gray-500 text-xs">
            Status: <span className="text-orange-300">{order?.state}</span>
          </p>
        </div>

        <div>
          {order.items.map((item) => {
            return (
              <div
                key={item?.id}
                className="checkout-menu--product py-4 h-auto mb-0"
              >
                <img className="h-16" src={item?.images[0]} alt="" />

                <div className="product--info">
                  <h3>{item?.title}</h3>
                  <p>{item?.category?.name}</p>
                </div>

                <div className="product--count text-gray-500 text-sx">
                  <p>{item?.amount}</p>
                  <p>{item?.amount > 1 ? 'items' : 'item'}</p>
                </div>

                <div className="product--total">
                  <p>$ {item?.price * item?.amount}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between h-12 items-center">
          <p className="text-gray-600 text-xs">
            Paid using credit card ending with 9898
          </p>
          <p className="text-gray-500">{order?.totalItems} items</p>
          <p className="font-bold">$ {order?.totalPrice}</p>
        </div>
      </div>
    </section>
  ) : (
    <NotFound />
  );
}

export { MyOrder };
