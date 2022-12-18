import { useId, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Styles from "./Styles.css";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 16px;
  background-color: #c29090;
  cursor: pointer;
  margin-bottom: 10px;
`;
const user = {
  email: "",
  password: "",
};
function Login() {
  const [userID, setUserID] = useState(user);
  const { authState, loginUser } = useContext(AuthContext);
  const [boolean, setBoolean] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserID({
      ...userID,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    setBoolean(true);
    e.preventDefault();
    const url = `https://reqres.in/api/login`;
    try {
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          email: userID.email,
          password: userID.password,
        }),
      });
      let data = await res.json();
      if (data.token) {
        loginUser(data.token);
      } else {
        alert("Wrong Credentials");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  if (authState.isAuth) {
    return <Navigate to={"/admin"} />;
  }
  return (
    <div className="login-page">
      <div className="wrapperl">
      <Title>Only for ADMIN</Title>
        <form className="form" onSubmit={handleSubmit}>
          <div style={{marginBottom:"20px"}}>
            <label>
              <input
                type="email"
                name="email"
                value={userID.email}
                onChange={handleChange}
                placeholder="email"
                
              />
            </label>
          </div>
          <div style={{marginBottom:"20px"}}>
            <label>
              <input
                type="password"
                name="password"
                value={userID.password}
                onChange={handleChange}
                placeholder="password"
              />
            </label>
          </div>
          <div>
            <Button disabled={boolean} type="submit">
              Go to Admin Panel
            </Button>
          </div>
        </form>
        <div>
          <Link className="goback" to="/">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
