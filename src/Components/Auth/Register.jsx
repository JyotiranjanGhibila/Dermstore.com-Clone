import styled from "styled-components";
import {Link, Navigate} from "react-router-dom"
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;

    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    opacity: 70%;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Title = styled.h1`
     font-size: 24px;
     font-weight: 300;
`;
const Input = styled.input`
     flex: 1;
     min-width: 40%;
     margin: 20px 10px 0px 0px;
     padding: 10px;
     border: 0.5px solid black;
     
`;
const Agreement = styled.span`
     font-size: 12px;
     margin: 20px 0px;
`;
const Button = styled.button`
     width: 40%;
     border: none;
     padding: 15px 20px;
     background-color: #e7c1c8;
     cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By Creating An Account, I Consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button><Link to="/log">CREATE</Link></Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
