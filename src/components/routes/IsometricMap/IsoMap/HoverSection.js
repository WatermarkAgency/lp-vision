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
      // Offices
      case 1:
        returnValue = {top: '40%', left: '22%', width: '20%', height: '24%', transform: 'rotate(-40deg) skew(21deg, 10deg)'};
        break;
      // Marketing
      case 2:
        returnValue = {top: '14%', left: '20%', width: '18%', height: '23%', transform: 'rotate(-42deg) skew(19deg, 13deg)', clipPath: 'polygon(0% 70%, 22% 70%, 22% 0, 100% 0, 100% 100%, 0 100%)'};
        break;
      // Production
      case 3:
        returnValue = {top: '20%', left: '43%', width: '16%', height: '36%', transform: 'rotate(-40deg) skew(21deg, 10deg)'};
        break;
      // Digital
      case 4:
        returnValue = {top: '44%', left: '56%', width: '17%', height: '17%', transform: 'rotate(-40deg) skew(21deg, 10deg)'};
        break;
      // Shipping
      case 5:
        returnValue = {top: '7%', left: '51%', width: '27%', height: '70%', transform: 'rotate(-40deg) skew(21deg, 10deg)', clipPath: 'polygon(0px 77%, 61% 77%, 61% 0px, 100% 0px, 100% 100%, 0px 100%)'};
        break;
      // Large Format
      case 6:
        returnValue = {top: '49%', left: '43%', width: '13%', height: '27%', transform: 'rotate(-40deg) skew(21deg, 10deg)'};
        break;
      // Analytics
      case 7:
        returnValue = {top: '58%', left: '37%', width: '7%', height: '28%', transform: 'rotate(-40deg) skew(21deg, 10deg)'};
        break;
      default: 
        returnValue = {};
    }
    return returnValue;
  }
  return (
    <Wrap 
      style={createStyleObj(secIndex)}
      onMouseEnter={() => updateCurrSec(secIndex)} 
      onMouseLeave={() => updateCurrSec(0)}    
    />
  )
}
 
export default HoverSection