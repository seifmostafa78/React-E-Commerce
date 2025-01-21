import styled from "styled-components"
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
    linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center
    ;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({width: '75%'})}
`;

const Title = styled.h1`
  font-size: 24px; 
  font-weight: 300;
`;

const Form = styled.form`
   display: flex;
   flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 10px 0;
`;

const Button = styled.button`
  margin-bottom: 10px;
  width: 40%;
  padding: 15px 20px;
  color: white;
  background-color: teal;
  border: none;
  cursor: pointer;
`;

const Text = styled.span`
  margin: 5px 0;
  text-decoration: underline;
  font-size: 12px;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Text>DO NOT YOU REMEMBER THE PASSWORD?</Text>
                <Text>
                  <Link to="/register" className='link'>CREATE A NEW ACCOUNT</Link>
                </Text>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login