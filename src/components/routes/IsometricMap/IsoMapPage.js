import React from 'react'
import styled from 'styled-components'
import Hero from './Layout/Hero'
import IsoMap from './IsoMap/IsoMapComponent'
 
const Wrap = styled.div`
 
`
 
const IsoMapPage = ({ sectionsData, heroBG }) => {
  return (
    <Wrap>
      <Hero bg={heroBG} />
      <IsoMap sectionsData={sectionsData} />
    </Wrap>
  )
}
 
export default IsoMapPage