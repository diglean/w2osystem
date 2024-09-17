import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./Domain/Products/dashboard";
import Create from "./Domain/Products/create";
import "./App.css";
import Report from "./Domain/Products/report";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/product/list" element={<Dashboard />} />
          <Route path="/product/report" element={<Report />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
