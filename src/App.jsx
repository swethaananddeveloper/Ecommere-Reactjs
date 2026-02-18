import './App.css'
import Header from './Component/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import Product from './Pages/Product'
import MoreDetails from "./Pages/MoreDetails";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
  <Header />
    

  <Product />
  <MoreDetails />
</>
)
}

export default App
