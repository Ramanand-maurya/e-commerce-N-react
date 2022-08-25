import "./css/fontawesome.css";
import React from "react";
import "./css/slick.css";
import "./css/bootstrap.min.css";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import ProductsDisplay from "./Pages/ProductsDisplay";
import WishlistPage from "./Pages/WishlistPage";
import CartPage from "./Pages/CartPage";
import { DataProvider } from "./Context/DataContext";
import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishlistContext";
import { FeedbackProvider } from "./Context/FeedbackContext";
import Feedback from "./Components/Feedback";
import { FilterProvider } from "./Context/FilterContext";
import Footer from "./Components/Footer";
import Login from "./Pages/login";
import Checkout from "./Pages/checkout";
import ProtecteRoutes from "./Components/ProtecteRoutes";
import BlogDetail from "./Components/BlogDetail";
import GoToTop from './Components/GoToTop';
import Register from "./Pages/Register";
import ProductShow from "./Components/ProductShow";

export default function App() {
  return (
    <div className="App">
      <GoToTop />
      <DataProvider>
        <CartProvider>
          <WishlistProvider>
            <FeedbackProvider>
              <FilterProvider>
                <Navbar />
                <Feedback />
                <Routes>
                  <Route exact path="/" element={<LandingPage />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/register" element={<Register />} />
                  <Route exact path="/productShow" element={<ProductShow />} />
                  <Route exact element={<ProtecteRoutes />}>
                    <Route element={<Checkout />} path="/checkout" exact />
                    <Route element={<Checkout />} path="/account" exact />
                  </Route>
                  <Route exact
                    path="/products/:category"
                    element={<ProductsDisplay />}
                  />
                  <Route exact path="/BlogDetail/:blogId" element={<BlogDetail />} />
                  <Route exact path="/wishlist" element={<WishlistPage />} />
                  <Route exact path="/cart" element={<CartPage />} />
                </Routes>
                <Footer />
              </FilterProvider>
            </FeedbackProvider>
          </WishlistProvider>
        </CartProvider>
      </DataProvider>
    </div>
  );
}
