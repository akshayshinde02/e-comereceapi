import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

// import { BrowserRouter as Routes,Route } from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom';
import Product from './Product.js'
import CardPage from './CardPage.js'


function App() {
  return (
  //  <Product/>
<>
   <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<Product/>}/>
    {/* <Route path="/nevigation" element={<CardPage/>}/> */}
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
