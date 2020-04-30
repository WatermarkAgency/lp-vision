import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Theme from '../../../vars/ThemeOptions'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
 
const Wrap = styled.div`
  margin: 5vw 0;
  .rich-text-wrap {
    padding-right: 5vw;
    ul {
      margin-top: -10px;
      margin-left: 0;
      li {
        list-style-image: url("https://images.ctfassets.net/5235n2cu1xlz/1IoaWPxkpVoTMuAj3K3Wh4/e741df4123ea63f76dc17bd415072513/custom-bullet-spaceRight.png?h=250");
      } 
    }
  }
`
 
const CopyAndPreview = ({ copy, preview, formCopy }) => {
  return (
    <Wrap>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <div className="rich-text-wrap">
              {documentToReactComponents(copy.json)}
            </div>            
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