import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Theme from '../../../vars/ThemeOptions'
 
const Wrap = styled.div`
  margin: 5vw 0;
`
 
const CopyAndPreview = props => {
  return (
    <Wrap>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            copy
          </Col>
          <Col xs={12} md={4}>
            preview
          </Col>
        </Row>
      </Container>
    </Wrap>
  )
}
 
export default CopyAndPreview