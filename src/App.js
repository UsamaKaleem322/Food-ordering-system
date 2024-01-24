import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/home';
import Shop from './components/Shop/shop';
import Cart from './components/Cart/cart';
import Categories from './components/Categories/categories';
import Checkout from './components/Checkout/checkout';
import Header from './components/Header/header';
import Accounts from './components/Accounts/accounts';
function App() {
  return (
     <Router>
      <Header/>
       <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/shop' element={<Shop/>}/>
         <Route exact path='/categories' element={<Categories/>}/>
         <Route exact path='/accounts' element={<Accounts/>}/>
         <Route exact path='/cart' element={<Cart/>}/>
         <Route exact path='/checkout' element={<Checkout/>}/>
       </Routes>
     </Router>
  );
}

export default App;
