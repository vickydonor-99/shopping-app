import './assets/scss/App.scss';
import Login from 'components/screens/Login/Login';
import Signup from 'components/screens/Signup/Signup';
import Homepage from './components/screens/Homepage';
import Navbar from 'components/common/navbar/Navbar';
import Checkout from 'components/screens/Checkout/Checkout';
import Product from 'components/screens/Product/Product';
import CategoryProductListing from 'components/screens/ListingPage/CategoryProductListing';
import Wishlist from 'components/screens/Wishlist/Wishlist';
import Suggestions from 'components/screens/Suggestions/Suggestions';
import PageNotFound from 'components/screens/PageNotFound';
import { categoryListProductDetails } from 'utils/categoryListProductDetails';
import { productDetails } from 'utils/productDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <div
          className='mx-auto navbar__big w-100 position-relative'
          style={{ maxWidth: '1440px', zIndex: '1' }}
        >
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart' element={<Checkout />} />
          <Route path='/product' element={<Product />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/v1/list/:category'
            element={
              <CategoryProductListing
                categoryListProductDetails={categoryListProductDetails}
              />
            }
          />
          <Route
            path='/v1/suggestions/:searchString'
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            element={<Suggestions productDetails={productDetails} />}
          />
          <Route
            path='/v1/product/:id/:productName'
            element={<Product productDetails={productDetails} />}
          />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
