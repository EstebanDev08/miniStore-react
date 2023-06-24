import React from 'react';
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom';
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { NotFound } from '../NotFound';
import './App.css';
import Navbar from '../Components/Navbar';
import { Layout } from '../Components/Layout';
import {
  GlobalContext,
  GlobalContextProvider,
} from '../../context/GlobalContext';
import { CheckoutSideMenu } from '../Components/CheckoutSideMenu';
import { SingIn } from '../SignIn';

const ResolveRoutes = ({ isLoggedIn }) => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    {
      path: '/categorie/*',
      element: <Home />,
    },
    {
      path: '/my-account',
      element: isLoggedIn ? <MyAccount /> : <Navigate to="/sign-in" />,
    },
    {
      path: '/my-order',
      element: isLoggedIn ? <MyOrder /> : <Navigate to="/sign-in" />,
    },
    {
      path: '/my-orders',
      element: isLoggedIn ? <MyOrders /> : <Navigate to="/sign-in" />,
    },
    { path: '/sign-in', element: <SingIn /> },
    {
      path: '/my-order/id/*',
      element: isLoggedIn ? <MyOrder /> : <Navigate to="/sign-in" />,
    },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <GlobalContextProvider>
      <GlobalContext.Consumer>
        {({ isOpenShopingCart, isUserLogin }) => (
          <BrowserRouter>
            <Navbar />
            <Layout>
              <ResolveRoutes isLoggedIn={isUserLogin} />
            </Layout>
            {isOpenShopingCart && <CheckoutSideMenu />}
          </BrowserRouter>
        )}
      </GlobalContext.Consumer>
    </GlobalContextProvider>
  );
};

export default App;
