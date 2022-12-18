<<<<<<< HEAD
import React, { useEffect, useState } from "react";

import AddProducts from "./AddProducts";
import { addProduct, getProducts } from "./api";

const Products = () => {
  const [data, setData] = useState([]);

  const handleGetPro = () => {
    getProducts()
      .then((res) => {
        setData(res.data);
      })
      .catch((er) => console.log(er));
  };

  useEffect(() => {
    handleGetPro();
  }, []);
  console.log(data);

  const handleAddPro = (data) => {
    addProduct(data);
  };
  return (
    <div>
      <AddProducts handleAddPro={handleAddPro} />
    </div>
  );
};

export default Products;
=======
import React, { useEffect, useState } from 'react'
import AddProducts from './AddProducts'
import {addProduct,getProducts} from "./api"


const Products = () => {
    const [data,setData]=useState([]);

    const handleGetPro=()=>{
        getProducts()
        .then((res)=>{
            setData(res.data)
        })
        .catch((er)=>console.log(er))
    }

    useEffect(()=>{
        handleGetPro()
    },[])
    console.log(data)

    const handleAddPro=(data)=>{
        addProduct(data)
    }
  return (
    <div>
        <AddProducts handleAddPro={handleAddPro}/>
    </div>
  )
}

export default Products
>>>>>>> 29aab3e6994cc76c77e5a90b08b6bc7ea692549f
