import styled from "styled-components"
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from "../responsive";


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

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: 'column'})}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 20px 0;
  width: 65vw;
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const ProductImage = styled.img`
  width: 200px;
`;

const Details = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;

const ProductName = styled.span`
`;

const ProductId = styled.span`
  ${mobile({margin: '10px 0'})}
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${props => props.color};
`;

const ProductSize = styled.span`
  ${mobile({marginTop: '10px'})}
`;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Amount = styled.span`
  font-size: 24px;
  margin: 5px;
  ${mobile({margin: '5px 15px'})}
`;

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom: '20px'})}
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
                  <Product>
                    <ProductDetails>
                      <ProductImage src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                      <Details>
                        <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                        <ProductId><b>ID:</b> 93813718293</ProductId>
                        <ProductColor color="black"/>
                        <ProductSize><b>Size:</b> 37.5</ProductSize>
                      </Details>
                    </ProductDetails>
                    <PriceDetails>
                      <AmountContainer>
                        <RemoveIcon style={{cursor: 'pointer'}}/>
                        <Amount>2</Amount>
                        <AddIcon style={{cursor: 'pointer'}}/>
                      </AmountContainer>
                      <ProductPrice>$ 30</ProductPrice>
                    </PriceDetails>
                  </Product>
                  <Hr/>
                  <Product>
                    <ProductDetails>
                      <ProductImage src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"/>
                      <Details>
                        <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                        <ProductId><b>ID:</b> 93813718293</ProductId>
                        <ProductColor color="gray"/>
                        <ProductSize><b>Size:</b> M</ProductSize>
                      </Details>
                    </ProductDetails>
                    <PriceDetails>
                      <AmountContainer>
                        <RemoveIcon style={{cursor: 'pointer'}}/>
                        <Amount>1</Amount>
                        <AddIcon style={{cursor: 'pointer'}}/>
                      </AmountContainer>
                      <ProductPrice>$ 30</ProductPrice>
                    </PriceDetails>
                  </Product>
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
                      <SummaryItemPrice>$ 80</SummaryItemPrice>
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
