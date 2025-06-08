import './App.css';
import MainPage from "./MainPage";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}/>
        </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
