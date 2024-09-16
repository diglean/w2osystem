import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Dashboard from "./Domain/Products/dashboard";
import Create from "./Domain/Products/create";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Create /> }/>
          <Route path="/product/list" element={ <Dashboard /> }/>
          {/* <Route path="/product/withdraw" element={ <Withdraw /> }/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
