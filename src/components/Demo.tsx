import React, { useContext, useState, useEffect } from 'react'
import { ProductContext } from '../context/ProductContext';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Product } from '../utility/Product';
export const Demo =()=>{
  const [products,setProducts]=useState<Product[] | null>();
  useEffect(() => {
    axios.get("http://localhost:5000/products").then((response)=>{
      setProducts(response.data);
    }

    )
  }, []); 
  
// const products = [
//     { id: 1, name: 'TV', price:7000},
//     { id: 2, name: 'Tablet', price: 10000 },
//     { id: 3, name: 'laptop', price: 8000 },
   
//   ];
//const products = useContext(ProductContext);
  return(
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {products?.map(product => (
            <tr key={product.id}>
              <td>{product.id} </td>
              <td>{product.name} </td>
              <td>{product.price}</td>
              <td><Link to={`editProduct/${product.id}`}> Edit </Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}