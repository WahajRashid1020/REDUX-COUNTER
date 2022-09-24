import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import Headers from "./containers/Headers";
import ProductListing from "./containers/ProductListing";
import ProductsDetails from "./containers/ProductsDetails";
const App = () => {
  return (
    <>
      <Router>
        {/* <ul>
          <li>
            <Link to="/">ListAll</Link>
          </li>
          <li>
            <Link to="/product/:productid">About Us</Link>
          </li>
        </ul> */}
        <Headers />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/products/:pid" element={<ProductsDetails />} />
          <Route>ERROR 404</Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
