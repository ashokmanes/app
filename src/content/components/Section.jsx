import React from "react";
import styled from 'styled-components';


const StyledSection = styled.div`
width:100%;
margin-top:40px;
& .header{
    width:28%;
    font-size: xxx-large;
    font-weight: 700;
    margin-bottom:2px;
    position:relative;
    animation:header 1s;
}

@keyframes header {
    0%   {left:-500px;}
    100% {left:0;}
  }

@keyframes body {
    0%   {right:-500px;}
    100% {right:0;}
  }

& .body{
    width:65%;
    text-align:justify;
    margin-left:26%;
    font-size:1.5rem;
    border-left:4px solid white;
    padding-left:20px;
    position:relative;
    animation:body 3s;
}
`;

export const Section =({sectionId,title,children})=>{

return (
    <StyledSection id={sectionId}>
    <div class="header"> {title}</div>
    <div class="body">
        {children}
    </div>
    </StyledSection>
)
}