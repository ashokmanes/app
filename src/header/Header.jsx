import React from "react";
import styled from 'styled-components';


const StyledHeader = styled.div`
    width:100%;
    height:80px;
    position:relative;
    background-color:white;
`;

const StyledImage =styled.img`
    width:150px;
    height:150px;
    position:absolute;
    top:1.5rem;
    left:2.5rem;
`


export const Header=()=>{
    return (<StyledHeader><StyledImage src="./hwc.jpg"/>
    <StyledList>
<StyledSubList><a href="#about">About us</a></StyledSubList>
<StyledSubList><a href="#services">Services </a></StyledSubList>
<StyledSubList><a href="#clients">Our Clients</a></StyledSubList>
<StyledSubList><a href="#contact">Contact</a></StyledSubList>
        </StyledList>
    </StyledHeader>)
}



const StyledList = styled.ul`
float:right;
list-style:none;
margin-top:50px;
color:#0b447f;


`

const StyledSubList = styled.li`

display:inline-block;
margin-right:20px;
border:#0b447f solid 2px;
border-bottom:none;
border-radius:5px;
padding:5px 15px;

font-weight:700;

a{
    text-decoration:none;
    color:#0b447f;
}

&:hover{
    background-color:#0b447f;
    a{
        color:white;
    }
}
`;

