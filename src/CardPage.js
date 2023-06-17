import React from 'react'
import Product from './Product'
import './style.css';
import { useLocation } from 'react-router-dom';

const CardPage = () => {
  const location = useLocation();
  const res= location.state?.res;
  console.log(res)
  return (
    <>
    <h1 className='cardlist'>Card List</h1>

    <div className="container">
        <div className="row2">
           <div className="card">
    <p>{res.title}</p>
    <h1> {`Brand Name is : ${res.title}`}</h1>
    <h1> {`Brand Name is : ${res.price} $`}</h1>
    </div>
    </div>
    </div>
    </>
  )
}

export default CardPage