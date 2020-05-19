import React,{useState} from "react";
import { Accordion,Icon } from 'semantic-ui-react'

import {Section} from "./components/Section"


const panels=[
    
        {
          key: '1key',
          title: 'Title 1',
          content: 'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome'
        },
        
            {
              key: '2key',
              title:'Title 2',
              content: 
                'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome'
                
              
            }]


export const Services =()=>{
    const [activeIndex, setActiveIndex]=useState(0);

    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
    
        setActiveIndex(newIndex);
      }
    return (<Section sectionId="services" title="Services">
        <details>
    <summary>Details</summary>
    Something small enough to escape casual notice.
</details></Section>);
}