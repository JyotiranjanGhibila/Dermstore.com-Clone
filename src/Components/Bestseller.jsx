import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const Bestseller = () => {
  const [bestsell, setBestSell] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = (page) => {
    return fetch(
      ` http://localhost:8080/BestSeller?_page=${page}&_limit=5`
    ).then((res) => res.json());
  };
  useEffect(() => {
    handleFetch(page);
  }, [page]);
  const handleFetch = async (page) => {
    try {
      const data = await fetchData(page);
      setBestSell(data);
    } catch (er) {
      console.log(er);
    }
  };
  //   console.log(bestsell);
  const pageChange = (value) => {
    setPage(page + value);
  };
<<<<<<< HEAD
  const handleBuy=()=>{
    alert("Your Order is Deliver Soon")
    alert("Thank You For Shoping")
  }
=======

>>>>>>> 29aab3e6994cc76c77e5a90b08b6bc7ea692549f
  return (
    <div>
      
      <h3>Bestseller</h3>
      <div
        className="best-sell-main-div"
        style={{ display: "flex", alignItems: "center" }}
      >
        <button
          onClick={() => pageChange(-1)}
          disabled={page == 1}
<<<<<<< HEAD
          style={{ border: "20px", height: "40px" }}
=======
          style={{ borderRadius: "20px", height: "40px" }}
>>>>>>> 29aab3e6994cc76c77e5a90b08b6bc7ea692549f
        >
          <FaAngleLeft />
        </button>
        {bestsell.map((el) => {
          return (
            <div key={el.id}>
              <img src={el.img} alt="img" />
              <p>{el.title}</p>
<<<<<<< HEAD
              <p>{el.name}</p>
              <h4>{el.price}</h4>
              <button className="black-btn" onClick={handleBuy}>QUICK BUY</button>
=======
              <h4>{el.price}</h4>
              <button className="black-btn">QUICK BUY</button>
>>>>>>> 29aab3e6994cc76c77e5a90b08b6bc7ea692549f
            </div>
          );
        })}
        <button
          onClick={() => pageChange(1)}
          disabled={page === 4}
<<<<<<< HEAD
          style={{ border: "20px", height: "40px" }}
=======
          style={{ borderRadius: "20px", height: "40px" }}
>>>>>>> 29aab3e6994cc76c77e5a90b08b6bc7ea692549f
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Bestseller;
