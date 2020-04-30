import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
// import ScrollTo from 'react-scroll-into-view'
import Theme from '../../../vars/ThemeOptions'

 
const Wrap = styled.div`
  position: relative;
  width: 105%;
  left: -2vw !important;
  color: ${Theme.hex('orange')};
  text-transform: uppercase;
  transform: rotate(-3deg) skewX(-10deg);
  margin-top: 10px;
  padding-bottom: 2vw;
  border-bottom: 2px solid ${Theme.hex('orange')} !important;

  border-top: 2px solid black;  // used to compare to angle of header - remove when page is complete

  .container {
    width: 90vw !important;
  }
  h1 {
    font-size: 4vw;
  }
  p {
    font-size: 1.25vw;
    padding: 0 1vw;
  }
  .block-span {
    display: block;
  }
  .button-outer-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 92%;
    .button-inner-wrap {
      padding: 0 1rem;
      background: ${Theme.hex('white')};
      button {
        border: none;
        background: ${Theme.hex('orange')};
        color: ${Theme.hex('white')};
        text-transform: uppercase;
        font-size: .9rem;
        font-weight: bold;
        :focus {
          outline: none;
        }
      }
    }
  }

`
 
const AngledPageTitle = ({ firstLine, secondLine, subtitle, buttonText }) => {
  return (
    <Wrap>
      <Container>
        <div>
          <h1>{firstLine}<span className="block-span">{secondLine}</span></h1>
          <p>{subtitle}</p>
        </div>
      </Container>
      <div className="button-outer-wrap">
        <div className="button-inner-wrap">
          {/* <ScrollTo selector="#form-section-wrap"> */}
            <button>{buttonText}</button>
          {/* </ScrollTo> */}
        </div>
      </div>
    </Wrap>
  )
}
 
export default AngledPageTitle