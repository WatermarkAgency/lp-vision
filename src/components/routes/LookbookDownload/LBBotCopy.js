import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Theme from '../../../vars/ThemeOptions'
 
const WrapCont = styled(Container)`
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  p {
    color: ${Theme.hex('textPrimary')};
    padding: 10px 0 15px 0;
    margin: 4rem 0 0 0;
    border-top: 1px solid ${Theme.hex('primary')};
    border-bottom: 1px solid ${Theme.hex('primary')};
  }
`
 
const LBBotCopy = ({ shortText3 }) => {
  return (
    <WrapCont>
      <p>{shortText3}</p>
    </WrapCont>
  )
}
 
export default LBBotCopy