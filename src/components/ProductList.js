import React, { useEffect, useState } from "react";
import Product from "./product";
import "./slider.css";

export default function ProductList() {
  const Api_user = "http://localhost:9000/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(Api_user);
      const data = await response.json();
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        console.error("Fetched products is not an array", data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await fetch("http://localhost:8000/categories");
      const data = await response.json();
      if (Array.isArray(data)) {
        setCategories(data);
      } else {
        console.error("Fetched categories is not an array", data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getProductsInCategory = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/categories/${id}`);
      const data = await response.json();
      if (data && data.products) {
        setProducts(data.products);
      } else {
        console.error(`Fetched products for category ${id} is not an array:`, data);
        setProducts([]); // Setting products to empty array as fallback
      }
    } catch (error) {
      console.error(`Error fetching products for category ${id}:`, error);
      setProducts([]); // Setting products to empty array as fallback
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <button className="btn btn-info" onClick={getProducts}>
          All
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            className="btn btn-info"
            onClick={() => getProductsInCategory(category.id)}
          >
            {category.name}
          </button>
        ))}

        <div className="row">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <div className="col-2 h-25 w-25" key={product.id}>
                <Product product={product} showbutton={true} buy={false} />
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </>
  );
}
