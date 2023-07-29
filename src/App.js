import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Exchanges from "./pages/exchanges/Exchanges";
import Coins from "./pages/coins/Coins";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./app.scss";
import CoinsDetails from "./pages/coinsDetails/CoinsDetails";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/coin/:id" element={<CoinsDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

export const server = `https://api.coingecko.com/api/v3`;
