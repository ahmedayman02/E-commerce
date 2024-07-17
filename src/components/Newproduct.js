import React, { useState, useEffect } from 'react';
import './slider.css'

function ProductComponent() {
  const [newproduct, newsetProduct] = useState([]);
  const [products, setProducts] = useState([]);

  
  const getproduct =  () => {
    fetch('http://localhost:9000/products/7')
  .then((res) =>  res.json() )
  .then((data) => setProducts(data));
  }
  

  // Step 1: Create a state to store the product data
  useEffect(() => {
    const Api_url1 = "http://localhost:9000/products/1";

  fetch(Api_url1)
  .then((res) =>  res.json() )
  .then((data) => newsetProduct(data));
  getproduct();
  },[])

  
  
  // Render the product data
  return (
<>
{/* ternary operator  */}
<div>
            
        <div className='card ' style={{    width: "188px",
    margin: "auto",
    display: "flex",
    
    }}>
            <img className="card-img-top"  src={newproduct.image} alt="" />
          <h5 className="card-title">{newproduct.title}</h5>
          <p className="card-text">{newproduct.description}</p>
          <p className="card-text">price : {newproduct.price}$</p>

          {/* Render other product details */}
        </div>
     

    </div>



   

  
  
  
<div className='card col-3   w-25 '   style={{marginLeft:"40px"}} >
          <img className="card-img-top col-9"  src={products.image} alt="" />
        <h5 className="card-title">{products.title}</h5>
        <p className="card-text">{products.description}</p>
        <p className="card-text">price : {products.price}$</p>

        {/* Render other product details */}
      </div>










</>
  );
}

export default ProductComponent;
