
import { useRoutes, BrowserRouter } from 'react-router-dom'
import {Home} from '../Home';

import { MyAccount } from '../MyAccount';
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import {SingIn} from '../SignIn';
import {NotFound} from '../NotFound'
import './App.css'
import Navbar from '../Components/Navbar';
import { Layout } from '../Components/Layout';
import { GlobalContext, GlobalContextProvider } from '../../context/GlobalContext';
import { CheckoutSideMenu } from '../Components/CheckoutSideMenu';
import React from 'react';

const ResolveRoutes = ()=>{
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/sing-in', element: <SingIn/>},
    {path: '/my-order/id/*', element: <MyOrder/>},
    {path: '/*', element: <NotFound/>},
  ]);

  return routes
}



const App = () => {

  return (

    <GlobalContextProvider>

      <GlobalContext.Consumer>
        {({isOpenShopingCart,

        })=>(


        <BrowserRouter>

        <Navbar/>

        <Layout>
          <ResolveRoutes/>
        </Layout>


        { isOpenShopingCart && <CheckoutSideMenu/>}

        </BrowserRouter>

        )}

      </GlobalContext.Consumer>

    </GlobalContextProvider>

  )
}

export default App
