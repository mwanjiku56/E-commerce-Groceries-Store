import React, { useState,useEffect } from 'react'

function Products() {

const[products,setProduct]=useState([])

useEffect(() => {
    fetch(" http://localhost:2022/products")
      .then((r) => r.json())
      .then((products) => setProduct(products));
  }, []);


  return (
    <table>

  <thead>
    <tr>
        <th>Product Id</th>
        <th>Name</th>
        <th>Amount</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
  {products.map((product,id) => (
    <tr key={id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.amount}</td>
        <td>{product.description}</td>
        <td><button type='button'>Incart</button></td>
    </tr>
  ))}
  </tbody>
  </table>
)
}

export default Products
