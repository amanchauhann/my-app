import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import { useContext } from "react";
import { ContextData } from "./index";
import ListedProducts from "./Pages/ListedProducts";
import Mockman from "mockman-js"
import ProductDetail from "./Pages/ProductDetail";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

<<<<<<< Updated upstream
import Profile from "./Pages/Profile";
import Details from "./Components/Profile/Details";
import Address from "./Components/Profile/Address";
import Logout from "./Pages/Auth/Logout";
=======
>>>>>>> Stashed changes

function App() {
  const location = useLocation();
  const shouldDisplayNav = location.pathname !== "/";
  // const {productsData} = useContext(ContextData)
  // console.log(productsData.products)
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        // newestOnTop={false}
        closeOnClick
        rtl={false}
        // pauseOnFocusLoss
        // draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div style={{ background: "rgb(53, 53, 53)" }}>
        {shouldDisplayNav && <Nav />}

      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ListedProducts />} />
        <Route path="/products/:ProductID" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/profile" element={<Profile />} >
          <Route path="details" element={<Details />} />
          <Route path="address" element={<Address />} />
        </Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
