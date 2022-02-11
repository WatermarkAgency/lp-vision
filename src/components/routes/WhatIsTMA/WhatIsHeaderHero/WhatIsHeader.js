import * as React from "react";
import styled from 'styled-components'
import Theme from '../../../../vars/ThemeOptions'
import VisLogo from '../../../common/VisLogo'
 
const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;  
  .main, .bot-border {
    width: 95vw;
    height: auto;
    padding: 3vw 5rem 7rem 5vw;
    clip-path: polygon(0% 0%, 95% 0%, 0% 100%);
  }
  .main {    
    position: relative;
    z-index: 10;
    background: ${Theme.hex('white')};
  }
  .bot-border {
    width: 103%;
    height: 103%;
    position: absolute;
    z-index: 9;
    top: 0;
    background: ${Theme.hex('primary')};
  }
`
 
const WhatIsHeader = props => {
  return (
    <Wrap>
      <div className="main">
        <VisLogo width="20vw" />
      </div>        
      <div className="bot-border" />
    </Wrap>
  )
}
 
export default WhatIsHeader