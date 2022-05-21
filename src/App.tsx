import Home from "./components/pages/home/home";
import Shop from "./components/pages/shop/shop";
import Topbar from "./components/navbar/topbar";
import Footer from "./components/footer/footer";

//router

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
