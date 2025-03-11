import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BuyTicket from "./components/BuyTicket/BuyTicket";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy-ticket" element={<BuyTicket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
