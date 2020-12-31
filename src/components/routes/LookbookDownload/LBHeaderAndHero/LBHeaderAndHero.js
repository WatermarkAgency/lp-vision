import React from 'react'
import styled from 'styled-components'
import LBHeader from './LBHeader'
import LBHero from './LBHero'
 
const Wrap = styled.div`
 
`
 
const LBHeaderAndHero = ({ titleLine1, titleLine2, bg })  => {
  return (
    <Wrap>
      <LBHeader />
      <LBHero titleLine1={titleLine1} titleLine2={titleLine2} bg={bg} />
    </Wrap>
  )
}
 
export default LBHeaderAndHero