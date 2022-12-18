import React from 'react'
import { useParams } from 'react-router-dom'
const AddToCart = () => {
  const {id}=useParams();
  console.log(id)
  return (
    <div>AddToCart</div>
  )
}

export default AddToCart