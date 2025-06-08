import './App.css';
import MainPage from "./MainPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    
    <Router>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
    </Router>
    
  )
}

export default App
