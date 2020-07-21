import React from 'react'
import styled from 'styled-components'
 
const Wrap = styled.div`
  position: absolute;
`
 
const HoverSection = ({ secIndex, updateCurrSec }) => {
  const createStyleObj = sectionIndex => {
    switch(sectionIndex) {
      // offices
      case 1:
        return {top: '40%', left: '22%', width: '20%', height: '24%', transform: 'rotate(-40deg) skew(20deg, 13deg)', background: 'rgba(0,0,0,0.3)'};
        break;
      case 2:
        return {};
        break;
      case 3:
        return {};
        break;
      case 4:
        return {};
        break;
      case 5:
        return {};
        break;
      case 6:
        return {};
        break;
      default: 
        return {};
    }
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