import * as React from "react";
import styled from 'styled-components'
import WhatIsHeader from './WhatIsHeader'
import WhatIsHero from './WhatIsHero'
 
const Wrap = styled.div`
 
`
 
const WhatIsHeaderAndHero = ({ titleLine1, titleLine2, bg })  => {
  return (
    <Wrap>
      <WhatIsHeader />
      <WhatIsHero titleLine1={titleLine1} titleLine2={titleLine2} bg={bg} />
    </Wrap>
  )
}
 
export default WhatIsHeaderAndHero