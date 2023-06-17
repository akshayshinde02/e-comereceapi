import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css';
import './App.css';
import CardPage from './CardPage';

const Product = () => {
    
    const [res,setRes] = useState({})
    
    const navigate = useNavigate();
        async function callapi(){
            try{
            const api = await fetch(`https://dummyjson.com/products/1`)
            const response = await api.json();
            // console.log(response);

            setRes(response)
            
            console.log(res);
            
         }catch(error){
            console.log(error)
         }
      }
      
      useEffect(() =>{
         callapi();
      })

      const callapi1 = (e)=>{
         navigate('/nevigation', { state: { res} });
      }

  return (
    <>


    <div className="container">
    <form onSubmit={callapi1} >
        <div className="row">
           <div className="card">
        <h2>{`Brand Name is : ${res.title}`}</h2>
        <p>{`Description : ${res.description}`}</p>
        <h3>{`Price : ${res.price} $`}</h3>
        <input type="submit" value="addToCard" />
           </div>
           
        </div><br /><br />
</form>
    </div>

    <CardPage res={res}/>
    </>
  )
}

export default Product

