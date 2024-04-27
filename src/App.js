import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Carts from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Orders from './customer/components/Orders/Orders';
import OrderDetail from './customer/components/Orders/OrderDetail';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
      <div>
        {/* <HomePage/> */}
        {/*<Carts/>*/}
        {/*<Checkout/>*/}
        {/*<Orders/>**/}
        <OrderDetail/>
      </div>
    </div>
  );
}

export default App;
