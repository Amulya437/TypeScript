import React from 'react'
import { useParams } from 'react-router-dom';

export const EditProduct = () => {

  const {id}=useParams();

  return (

    <div>EditProduct{id}</div>

  )

}