import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./Domain/Products/dashboard";
import Create from "./Domain/Products/create";
import Report from "./Domain/Products/report";
import History from "./Domain/ProductLog/history";

import "./App.css";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/product/list" element={<Dashboard />} />
          <Route path="/product/report" element={<Report />} />
          <Route path="/product-log/list" element={<History />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
