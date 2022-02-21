import * as React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
// import ScrollTo from 'react-scroll-into-view'
import Theme from "../../../vars/ThemeOptions";
import { COLORS } from "../../../vars/colors";

const Wrap = styled.div`
  position: relative;
  width: 105%;
  left: -2vw !important;
  color: ${COLORS.LIGHT_BLUE};
  text-transform: uppercase;
  transform: ${Theme.transform.angle};
  margin-top: 10px;
  padding-bottom: 2vw;
  border-bottom: 2px solid ${COLORS.LIGHT_BLUE} !important;
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
      background: ${Theme.hex("white")};
      button {
        border: none;
        background: ${Theme.hex("orange")};
        color: ${Theme.hex("white")};
        text-transform: uppercase;
        font-size: 0.9rem;
        font-weight: bold;
        :focus {
          outline: none;
        }
      }
    }
  }
  @media only screen and (max-width: 800px) {
    p {
      font-size: 2vw !important;
    }
  }
`;

const AngledPageTitle = ({ firstLine, secondLine, subtitle, buttonText }) => {
  return (
    <Wrap>
      <Container>
        <div>
          <h1>
            {firstLine}
            <span className="block-span">{secondLine}</span>
          </h1>
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
  );
};

export default AngledPageTitle;
