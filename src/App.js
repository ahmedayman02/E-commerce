import About from "./components/About";
import ProductList from "./components/ProductList";
import Slider from "./components/Slider";
import Navbar from "./components/navbar";
import { Route , Routes } from "react-router-dom";
import ProdductDetalis from "./components/productDetails";
import ProductComponent from "./components/Newproduct";

function App() {




  return (
    <div className="App">
   <Navbar/>
   <Routes>
<Route path="" element={<>
    
    <Slider/>
<ProductList/>
  </>}/>


<Route path="about" element={<About/>}/>
<Route path="Navbar" element={<Navbar/>}/>
<Route path="product/:ProductId" element={<ProdductDetalis/>}/>
   </Routes>










    </div>
  );
}

export default App;
