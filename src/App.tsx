import "./App.css";
import "animate.css/animate.compat.css";
import Home from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/cart";
function App() {
  return (
    <div>
      <Router>
        <Home />
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
