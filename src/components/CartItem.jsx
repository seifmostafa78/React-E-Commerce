import styled from "styled-components"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from "../responsive";
import {popularProducts} from "../data"
import { useCart } from "../context/CartContext";


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

const Small = styled.small`
  font-size: 16px;
`;

const CartItem = ({id, quantity}) => {

  const {increaseItemsQuantity, decreaseItemsQuantity} = useCart()

  const item = popularProducts.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <>
    <Product>
        <ProductDetails>
            <ProductImage src={item.img}/>
            <Details>
                <ProductName><b>Product:</b> {item.title}</ProductName>
                <ProductId><b>ID:</b> {item.uniqueID}</ProductId>
                <ProductColor color={item.color}/>
                <ProductSize><b>Size:</b> {item.size}</ProductSize>
            </Details>
        </ProductDetails>
        <PriceDetails>
            <AmountContainer>
                <RemoveIcon onClick={() => decreaseItemsQuantity(id)} style={{cursor: 'pointer'}}/>
                <Amount>{quantity}</Amount>
                <AddIcon onClick={() => increaseItemsQuantity(id)} style={{cursor: 'pointer'}}/>
            </AmountContainer>
            <ProductPrice>
              $ {item.price} {quantity > 1 && (
                <Small>x{quantity}</Small>
              )}
            </ProductPrice>
        </PriceDetails>
    </Product>
    <Hr/>
    </>
  )
}

export default CartItem