import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Theme from '../../../vars/ThemeOptions'
 
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .form-wrap {
    margin: 5vw 20vw;
    .row {
      .input-col {
        padding-left: 5px;
        padding-right: 5px;
        margin: 7px 0;
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
          transform: ${Theme.transform.angle};
        }
      }
    }
  }
  .form-copy-angle {
    width: 110%;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid ${Theme.hex('orange')};
    transform: ${Theme.transform.angle};
  }
  .form-copy-wrap {
    width: 41%;
    text-align: center;
    position: relative;
    h3 {
      font-size: 1.5vw;
      font-weight: bold;
      text-transform: uppercase;
      background: ${Theme.hex('white')};
      padding: 10px;
      position: absolute;
      top: -3vw;
    }      
  }
  @media only screen and (min-width: 1450px) {
    .form-copy-wrap {
      width: 39%;
    }
  }
  @media only screen and (max-width: 1100px) {
    .form-copy-wrap {
      width: 43%;
    }
  }
  @media only screen and (max-width: 850px) {
    .form-copy-wrap {
      width: 55%;
      h3 {
        font-size: 2vw;
      }
    }
    .submit-col {
      input[type="submit"] {
        width: 30% !important;
      }
    }
  }
  @media only screen and (max-width: 705px) {
    .form-copy-wrap {
      width: 59%;
    }
    .submit-col {
      input[type="submit"] {
        width: 40% !important;
      }
    }
  }
  @media only screen and (max-width: 590px) {
    .form-copy-wrap {
      width: 60%;
      h3 {
        font-size: 2vw;
        top: -5vw;
      }
    }
  }
`
 
const SSForm = ({ formCopy }) => {
  return (
    <Wrap id="form-section-wrap">
      <div className="form-copy-angle" />
      <div className="form-copy-wrap">
          <h3>{formCopy}</h3>
        </div>
      <div className="form-wrap">
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
      </div>
    </Wrap>
  )
}
 
export default SSForm