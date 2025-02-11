import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection: 'column'})}
`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
`;

const Logo = styled.h1`
  letter-spacing: 1px;
`;

const Desc = styled.p`
  margin: 20px 0;
  width: 80%;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcons = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
`;


const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: 'none'})}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: inline-block;
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor: '#fff8f8'})}
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({marginBottom: '15px'})}
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LOGO.</Logo>
            <Desc>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don’t look even slightly believable.
            </Desc>
            <SocialContainer>
                <SocialIcons color='3B5999'>
                    <FacebookIcon/>
                </SocialIcons>
                <SocialIcons color='E4405F'>
                    <InstagramIcon/>
                </SocialIcons>
                <SocialIcons color='55ACEE'>
                    <TwitterIcon/>
                </SocialIcons>
                <SocialIcons color='E60023'>
                    <PinterestIcon/>
                </SocialIcons>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <LocationOnIcon style={{marginRight: '5px'}}/> 622 Dixie Path , South Tobinchester 98336
            </ContactItem>
            <ContactItem>
                <PhoneIcon style={{marginRight: '5px'}}/> +1 234 56 78
            </ContactItem>
            <ContactItem>
                <MailOutlineIcon style={{marginRight: '5px'}}/> contact@lama.dev
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer
