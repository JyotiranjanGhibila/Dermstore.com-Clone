import React, { useEffect, useState } from "react";
import {FaAngleRight} from "react-icons/fa"
import {FaAngleLeft} from "react-icons/fa"
const Skinmedica = () => {
  const [pro, setPro] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(true);
  const fetchData = (page) => {
    return fetch(
      `http://localhost:8080/skinmedica?_page=${page}&_limit=2`
    ).then((res) => res.json());
  };

  useEffect(() => {
    handleFetch(page);
  }, [page]);
  const handleFetch = async (page) => {
    try {
      setLoad(true);
      const data = await fetchData(page);
      setPro(data);
      setLoad(false);
    } catch (er) {
      console.log(er);
      setLoad(false);
    }
  };
  // console.log(pro);

  const pageChange = (value) => {
    setPage(page + value);
  };
  return (
    <div className="main-div-skin-medica">
      <div className="imgoff">
        <img
          src="https://static.thcdn.com/images/medium/webp/widgets/208-us/49/676x556-Shot16-V1-115749.jpeg"
          alt="img"
        />
      </div>
      <button onClick={() => pageChange(-1)} disabled={page == 1} style={{borderRadius:"20px",height:"40px"}}>
        <FaAngleLeft/>
      </button>
      {/* {load ? <h1> Load..</h1> : null} */}
      {pro.map((el) => {
        return (
          <div key={el.id} className="skinmedica-products">
            <img src={el.img} alt="img" />
            <p>{el.price}</p>
            <button className="black-btn">BUY NOW</button>
          </div>
        );
      })}

      <button onClick={() => pageChange(1)} disabled={page === 6} style={{borderRadius:"20px",height:"40px"}}>
       <FaAngleRight/>
      </button>
    </div>
  );
};

export default Skinmedica;
