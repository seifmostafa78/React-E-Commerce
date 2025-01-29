import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Container = styled.div`
   height: 60px;
   ${mobile({height: '50px'})}
`;

const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   ${mobile({padding: '10px 0'})}
`;

const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
`;

const Language = styled.span`
   font-size: 14px;
   ${mobile({display: 'none'})}
`

const SearchContainer = styled.div`
   border: 0.5px solid lightgray;
   display: flex;
   align-items: center;
   margin-left: 25px;
   padding: 5px;
   ${mobile({marginLeft: '10px'})}
`;

const Input = styled.input`
   border: none;
   outline: none;
   ${mobile({width: '50px'})}
`;

const Center = styled.div`
   flex: 1;
   text-align: center;
`;

const Logo = styled.h1`
   font-weight: bold;
   ${mobile({width: '24px', marginLeft: '10px', fontSize: '24px'})}
`;


const Right = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   ${mobile({flex: 2, justifyContent: 'center'})}
`;

const MenuItems = styled.div`
   font-size: 14px;
   margin-left: 25px;
   cursor: pointer;
   ${mobile({fontSize: '12px', marginLeft: '10px'})}
`;

const NavBar = () => {
  const {getCartQuantity} = useCart();
  
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                   <Input placeholder="Search"/> 
                   <SearchIcon style={{color: 'gray', fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                  <Link to="/" className='link'>LOGO.</Link>
                </Logo>
            </Center>
            <Right>
                <MenuItems>
                  <Link to="/register" className='link'>REGISTER</Link> 
                </MenuItems>
                <MenuItems>
                  <Link to="/login" className='link'>SIGN IN</Link>
                </MenuItems>
                <MenuItems>
                <Link to="/cart" className='link'>
                 <Badge badgeContent={getCartQuantity()} color="primary">
                    <ShoppingCartOutlinedIcon style={{cursor: 'pointer'}}/> 
                 </Badge>
                 </Link>
                </MenuItems>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default NavBar
