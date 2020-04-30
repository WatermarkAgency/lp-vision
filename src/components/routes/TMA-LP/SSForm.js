import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Theme from '../../../vars/ThemeOptions'
 
const Wrap = styled.div`
  margin: 5vw 20vw;
  display: flex;
  justify-content: center;
  .row {
    margin: 10px 0;
    .input-col {
      padding-left: 5px;
      padding-right: 5px;
      input {
        width: 100%;
        border: 2px solid ${Theme.hex('orange')};
        padding: 5px 10px;
      }
    }
    .submit-col {
      display: flex;
      justify-content: center;
      margin-top: 1.5rem;
      input[type="submit"] {
        width: 20%;
        background: ${Theme.hex('orange')};
        color: ${Theme.hex('white')};
        font-weight: bold;
        border: none;
        transform: rotate(-3deg) skewX(-10deg);
      }
    }
  }

`
 
const SSForm = props => {
  return (
    <Wrap id="form-section-wrap">
      <form>
        <Container fluid>
          <Row>
            <Col className="input-col" sm={12} md={6}>
              <input type="text" name="firstName" placeholder="First Name" />
            </Col>
            <Col className="input-col" sm={12} md={6}>
              <input type="text" name="lastName" placeholder="Last Name" />
            </Col>
          </Row>
          <Row>
            <Col className="input-col">
              <input type="text" name="email" placeholder="Email" />
            </Col>
          </Row>
          <Row>
            <Col className="input-col">
              <input type="text" name="company" placeholder="Company" />
            </Col>
          </Row>
          <Row>
            <Col className="input-col">
              <input type="text" name="address" placeholder="Address" />
            </Col>
          </Row>
          <Row>
            <Col className="input-col" sm={12} md={4}>
              <input type="text" name="city" placeholder="City" />
            </Col>
            <Col className="input-col" sm={12} md={4}>
              <input type="text" name="state" placeholder="State" />
            </Col>
            <Col className="input-col" sm={12} md={4}>
              <input type="text" name="zip" placeholder="Zip" />
            </Col>
          </Row>
          <Row>
            <Col className="input-col submit-col">
              <input type="submit" value="SUBMIT" />
            </Col>
          </Row>
        </Container>
      </form>
    </Wrap>
  )
}
 
export default SSForm