import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import { useContext } from "react";
import { ContextData } from "./index";
import ListedProducts from "./Pages/ListedProducts";
import Mockman from "mockman-js"
import DummySingleProductPage from "./DummySingleProductPage";

function App() {
  const location = useLocation();
  const shouldDisplayNav = location.pathname !== "/";
// const {productsData} = useContext(ContextData)
// console.log(productsData.products)
  return (
    <div className="App">
      <div style={{background: "rgb(53, 53, 53)"}}>
      {shouldDisplayNav && <Nav />}

      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ListedProducts />} />
        <Route path="/products/:ProductID" element={<DummySingleProductPage />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
