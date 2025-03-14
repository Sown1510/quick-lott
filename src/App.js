import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BuyTicket from "./components/BuyTicket/BuyTicket";
import History from "./components/History/History";
import Earn from "./components/Earn/Earn";
import Account from "./components/Account/Account";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy-ticket" element={<BuyTicket />} />
          <Route path="/history" element={<History />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
