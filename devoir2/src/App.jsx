import './App.css';
import MainPage from "./MainPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    
    <BrowserRouter basename='Autorepair_site'>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
