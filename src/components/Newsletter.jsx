import styled from "styled-components"
import SendIcon from '@mui/icons-material/Send';
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({fontSize: '50px'})}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({textAlign: 'center', fontSize: '16px'})}
`;

const InpContainer = styled.div`
  border: 1px solid lightgray;
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  ${mobile({width: '80%'})}
`;

const Input = styled.input`
  flex: 8;
  border: none;
  outline: none;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InpContainer>
            <Input placeholder="your email"/>
            <Button>
                <SendIcon/>
            </Button>
        </InpContainer>
    </Container>
  )
}

export default Newsletter
