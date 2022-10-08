import React, { useState,useEffect } from 'react'

function Products() {

const[products,setProduct]=useState([])

useEffect(() => {
    fetch(" http://localhost:2022/products")
      .then((r) => r.json())
      .then((products) => setProduct(products));
  }, []);


  return (
    <div className='products'>

  <tbody>
    <tr>
        <th>Product Id</th>
        <th>Name</th>
        <th>Amount</th>
        <th>Description</th>
    </tr>
  </tbody>
  {products.map((product,id) => (
    <tr key={id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.amount}</td>
        <td>{product.description}</td>
    </tr>
  ))}
</div>
)
}

export default Products
