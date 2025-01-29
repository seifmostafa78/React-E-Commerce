import styled from "styled-components"
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import { popularProducts } from "../data";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding: '10px'})}
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 300;
`;

const Top = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopButton = styled.button`
    padding: 10px;
    border: ${(props) => props.type === "filled" && "none"};
    color: ${props => props.type === "filled" && 'white'};
    background-color: ${props => props.type === "filled"? 'black' : 'transparent'};
    font-weight: 600;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
      background-color: ${props => props.type !== "filled" && 'rgba(245, 222, 179, 0.7)'};
    }
`;

const TopTexts = styled.div`
  ${mobile({display: 'none'})}
`;

const TopText = styled.span`
  margin: 0 10px;
  text-decoration: underline;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: 'column'})}
`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200; 
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-size: ${props => props.total === 'total' && '24px'};
  font-weight: ${props => props.total === 'total' && 500};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  border: none;
  padding: 10px;
  color: white;
  background-color: black;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  const {cartItems} = useCart()
  return (
    <Container>
        <NavBar/>
        <Announcement/>
        <Wrapper>
           <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
              <Info>
                {cartItems.map((item) => (
                  <CartItem key={item.id} {...item}/>
                ))}
              </Info>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>$ 80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem total='total'>
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>
                    $ {cartItems.reduce((total, item) => {
                      const product = popularProducts.find((i) => i.id === item.id);
                      return total + (product?.price || 0) * item.quantity;
                      }, 0)}
                  </SummaryItemPrice>
                </SummaryItem>
                <SummaryButton>CHECKOUT NOW</SummaryButton>
              </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
