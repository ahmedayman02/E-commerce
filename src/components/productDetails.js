import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./product";

export default function ProdductDetalis() {
  const params = useParams();
  console.log(params);
  const [products, setproduct] = useState({});
  const getproducts = () => {
    fetch(`http://localhost:9000/products/${params.ProductId}`)
      .then((res) => res.json())
      .then((product) => setproduct(product));
  }


  useEffect(() => {

    getproducts();
  } , []);


  return (
    
    <>

    
    
 <Product  product={products} showbutton={false}   buy={true}  />

    </>
  );
}
