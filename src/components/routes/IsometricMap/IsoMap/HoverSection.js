import React from 'react'
import styled from 'styled-components'
 
const Wrap = styled.div`
  position: absolute;
  // background: rgba(0,0,0,0.3);
`
 
const HoverSection = ({ secIndex, updateCurrSec }) => {
  const createStyleObj = sectionIndex => {
    let returnValue;
    switch(sectionIndex) {
      // .5 indeces are referring to the category bar for the section - ex: index 1 is offices, 1.5 is the office piece of the category bar
      // Offices
      case 1:
        returnValue = {top: '40%', left: '22%', width: '20%', height: '24%', transform: 'rotate(-40deg) skew(21deg, 10deg)'};
        break;
      case 1.5:
        returnValue = {top: '94%', left: '-.5%', width: '15%', height: '5%', transform: 'rotate(-5.5deg)', clipPath: 'polygon(0% 0%, 91% 0%, 100% 50%, 91% 100%, 0% 100%)'};
        break;
      // Education
      case 2:
        returnValue = {top: '14%', left: '20%', width: '18%', height: '23%', transform: 'rotate(-42deg) skew(19deg, 13deg)', clipPath: 'polygon(0% 70%, 22% 70%, 22% 0, 100% 0, 100% 100%, 0 100%)'};
        break;
      case 2.5:
        returnValue = {top: '91.75%', left: '13%', width: '16.5%', height: '5%', transform: 'rotate(-5.4deg)', clipPath: 'polygon(0% 0%, 91% 0%, 100% 50%, 91% 100%, 0% 100%, 9% 50%)'};
        break;    
      // Offset
      case 3:
        returnValue = {top: '27%', left: '35%', width: '17%', height: '7%', transform: 'rotate(-40deg) skew(21deg, 10deg)'};
        break;
      case 3.5:
        returnValue = {top: '89.5%', left: '28%', width: '16%', height: '5%', transform: 'rotate(-5.4deg)', clipPath: 'polygon(0% 0%, 91% 0%, 100% 50%, 91% 100%, 0% 100%, 9% 50%)'};
        break;  
      // Production
      case 4:
        returnValue = {top: '22%', left: '49.5%', width: '16%', height: '45%', transform: 'rotate(-40deg) skew(21deg, 10deg)'};
        break;
      case 4.5:
        returnValue = {top: '87.5%', left: '42%', width: '16%', height: '5%', transform: 'rotate(-5.4deg)', clipPath: 'polygon(0% 0%, 91% 0%, 100% 50%, 91% 100%, 0% 100%, 9% 50%)'};        
        break;  
      // Shipping
      case 5:
        returnValue = {top: '7%', left: '51%', width: '27%', height: '70%', transform: 'rotate(-40deg) skew(21deg, 10deg)', clipPath: 'polygon(0px 77%, 61% 77%, 61% 0px, 100% 0px, 100% 100%, 0px 100%)'};
        break;
      case 5.5:
        returnValue = {top: '85.3%', left: '56.5%', width: '15%', height: '5%', transform: 'rotate(-5.4deg)', clipPath: 'polygon(0% 0%, 91% 0%, 100% 50%, 91% 100%, 0% 100%, 9% 50%)'};
        break;  
      // Large Format
      case 6:
        returnValue = {top: '49%', left: '43%', width: '13%', height: '27%', transform: 'rotate(-40deg) skew(21deg, 10deg)'};
        break;
      case 6.5:
        returnValue = {top: '83%', left: '70%', width: '17%', height: '5%', transform: 'rotate(-5.4deg)', clipPath: 'polygon(0% 0%, 91% 0%, 100% 50%, 91% 100%, 0% 100%, 9% 50%)'};
        break;  
      // Analytics
      case 7:
        returnValue = {top: '58%', left: '37%', width: '7%', height: '28%', transform: 'rotate(-40deg) skew(21deg, 10deg)'};
        break;
      case 7.5:
        returnValue = {top: '80.8%', left: '85.5%', width: '15%', height: '5%', transform: 'rotate(-5.4deg)', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 9% 50%)'};
        break;  
      default: 
        returnValue = {};
    }
    return returnValue;
  }
  const index = secIndex.toString().length === 1 ? secIndex : parseInt(secIndex.toString()[0])
  // console.log("index: ", index)
  return (
    <Wrap 
      style={createStyleObj(secIndex)}
      onMouseEnter={() => updateCurrSec(index)} 
      onMouseLeave={() => updateCurrSec(0)}    
    />
  )
}
 
export default HoverSection