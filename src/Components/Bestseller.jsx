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
          style={{ borderRadius: "20px", height: "40px" }}
        >
          <FaAngleLeft />
        </button>
        {bestsell.map((el) => {
          return (
            <div key={el.id}>
              <img src={el.img} alt="img" />
              <p>{el.title}</p>
              <h4>{el.price}</h4>
              <button className="black-btn">QUICK BUY</button>
            </div>
          );
        })}
        <button
          onClick={() => pageChange(1)}
          disabled={page === 2}
          style={{ borderRadius: "20px", height: "40px" }}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Bestseller;
