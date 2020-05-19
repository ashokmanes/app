import React from "react";
import styled from 'styled-components';

import {AboutUs} from "./AboutUs";
import {HomePage} from "./HomePage";
import {Services} from "./Services";
import {Clients} from "./Clients";
import {Contact} from "./Contact";


const StyledBody =styled.div`
 width:100%;
 text-align:center;
`
export const Content =()=>{
    return (<StyledBody>
        <HomePage/>
        <AboutUs/>
        <Services/>
        <Clients/>
        <Contact/>
    </StyledBody>)
}