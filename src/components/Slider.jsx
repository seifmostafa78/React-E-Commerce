import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {sliderItems} from '../data'
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   position: relative;
   overflow: hidden;
   ${mobile({display: 'none'})}
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: ${props=> props.direction === "left" && '10px'};
    right: ${props=> props.direction === "right" && '10px'};
    bottom: 0;
    margin: auto;
    z-index: 2;
`;

const Wrapper = styled.div`
   height: 100%;
   display: flex;
   transition: all 1.5s ease; 
   transform: translateX(${(props) => props.SlideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
   flex: 1;
   height: 100vh;

`;
const Image = styled.img`
   height: 80%;
`;

const InfoContainer = styled.div`
   flex: 1;
   padding: 50px;
`

const Title = styled.h1`
   font-size: 70px;
`;
const Desc = styled.p`
   text-transform: uppercase;
   margin: 50px 0;
   font-size: 20px;
   font-weight: 500;
   letter-spacing: 3px;
`;
const Button = styled.button`
   font-size: 20px;
   background-color: transparent;
   padding: 10px;
   cursor: pointer;
`;

const Slider = () => {
  
  const [SlideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
    if(direction === 'right'){
        setSlideIndex(SlideIndex < 2? SlideIndex + 1 : 0)
    }
    else{
        setSlideIndex(SlideIndex > 0? SlideIndex - 1 : 2)
    }
  }

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick('left')}>
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper SlideIndex={SlideIndex}>
            {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Link to="/product-list" className='link'>
                         <Button>SHOP NOW</Button>
                        </Link>
                    </InfoContainer>
                </Slide>
            ))
            }
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick('right')}>
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider
