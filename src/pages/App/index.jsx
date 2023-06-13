
import { useRoutes, BrowserRouter } from 'react-router-dom'
import {Home} from '../Home';

import { MyAccount } from '../MyAccount';
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import {SingIn} from '../SignIn';
import {NotFound} from '../NotFound'
import './App.css'

const ResolveRoutes = ()=>{
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/sing-in', element: <SingIn/>},
    {path: '/*', element: <NotFound/>},
  ]);

  return routes
}


const App = () => {

  return (
    <BrowserRouter>
      <ResolveRoutes/>
    </BrowserRouter>
  )
}

export default App
