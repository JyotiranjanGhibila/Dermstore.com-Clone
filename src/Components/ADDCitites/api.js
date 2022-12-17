import axios from "axios"

export const getProducts=()=>{
    return axios.get(`http://localhost:8080/BestSeller`)
}

export const addProduct=(data)=>{
    return axios.post(`http://localhost:8080/BestSeller`,{
         name:data.name,
         img:data.img,
         price:data.price
    })
}