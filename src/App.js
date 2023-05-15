import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import { useContext } from "react";
import { ContextData } from "./index";
import ListedProducts from "./Pages/ListedProducts";

function App() {
  const location = useLocation();
  const shouldDisplayNav = location.pathname !== "/";
// const {productsData} = useContext(ContextData)
// console.log(productsData.products)
  return (
    <div className="App">
      {shouldDisplayNav && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ListedProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
