import './App.css';
import MainPage from "./MainPage";
import Navbar from "./components/Navbar";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    
    // <BrowserRouter basename='Autorepair_site'>
    //     <Routes>
    //       <Route path="/" element={<MainPage />}></Route>
    //     </Routes>
    // </BrowserRouter>
    <MainPage/>
    
  )
}

export default App
