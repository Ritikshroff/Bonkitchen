import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import CateringPageRefactored from "./pages/CateringPageRefactored";
import OrderPageFinal from "./pages/OrderPageFinal";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/catering" element={<CateringPageRefactored />} />
          <Route path="/order" element={<OrderPageFinal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
