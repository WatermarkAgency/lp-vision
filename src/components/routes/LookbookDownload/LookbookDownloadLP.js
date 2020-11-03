import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import LBHeaderAndHero from './LBHeaderAndHero/LBHeaderAndHero'
 
const Wrap = styled.div`
  position: relative;
`
 
const LookbookDownloadLP = ({ data }) => {
  const { lp } = data;
  // console.log(data)
  const { shortText1, shortText2, shortText3, shortText4, shortText5, shortText6, shortText7, shortText8, richText1, richText2, files, file1, file2 } = lp;
  return (
    <Wrap>
      <LBHeaderAndHero titleLine1={shortText1} titleLine2={shortText2} bg={files[0]} />
    </Wrap>
  )
}
 
export default LookbookDownloadLP