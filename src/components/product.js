import { Link } from "react-router-dom";
import App from "../App";



export default function Product(props){
    console.log(props);
    // const Api_user = "http://localhost:9000/products";

    const {product , showbutton , buy  } = props
 const{newproduct} =props
 
 
return(
<>

<div className="card mt-5" key={product.id} >

  <img src={product.image} className="card-img-top rounded mx-auto d-block mt-3" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <p className="card-text">price : {product.price}$</p>


    {showbutton &&  <Link to={`/product/${product.id}`} className="btn btn-primary">Details</Link>} 
  { buy  && <Link   className="btn btn-danger"   >   Buy </Link>}
  </div>
</div>



</>



);







}


