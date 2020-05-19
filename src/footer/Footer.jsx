import React from "react";
import styled from 'styled-components';



const StyledFooter = styled.div`
color:white;
background-color: #0b447f;
width:100%;
height:40px;
text-align:center;

p{
    margin:0;
    margin:0;
}
`;

export const Footer=()=>{
    return (<StyledFooter id="footer">
            <p>ISO 9001:2008</p>
            <p>ISO 14001:2004 CERTIFIED COMPANY</p>
        </StyledFooter>
        );
}