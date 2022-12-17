import styled from "styled-components";
import {Link, Navigate} from "react-router-dom"
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(92, 89, 89, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.ctfassets.net/5de70he6op10/6YcDf5MI12J4gw9cOaz9WP/70f858a9574c2e0ff43b2b7bdc6e61af/LS_M4.jpg?w=2641&q=80&fm=webp")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #a39c9c;
  opacity: 70%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: 0.5px solid black;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #c29090;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Linkk = styled.a`
     margin: 5px 0px;
     font-size: 12px;
     text-decoration: underline;
     cursor: pointer;
`;

const LoginSignUp = () => {
  
  const handleLog=()=>{
    alert("Login Succssefull")
  }
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="username" />

          <Input placeholder="password" />

          <Button><Link to="/" onClick={handleLog}>Login</Link></Button>
          <Linkk>Do Not Remember The Password ?</Linkk>
          <Linkk>Create a new Account</Linkk>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginSignUp;
