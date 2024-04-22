import { Router } from 'react-router-dom';
import './App.css';
import Carts from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Orders from './customer/components/Orders/Orders';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        {/* <HomePage/> */}
        {/*<Carts/>*/}
        {/*<Checkout/>*/}
        <Orders/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
