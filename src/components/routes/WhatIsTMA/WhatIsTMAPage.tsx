import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Theme from "../../../vars/ThemeOptions";
import { NetlifyForm } from "wmk-netlify-form";
import { AngledLandingPageQuery } from "../../../node/pageAngled";
import { WmkImage, Img } from "wmk-image";
import { RichTextReact } from "../../RichText/RichTextReact";
import { RichText } from "wmk-rich-text";
import { COLORS } from "../../../vars/colors";
import { FormWrap } from "./Form";
import WhatIsHeaderAndHero from "./WhatIsHeaderHero/WhatIsHeaderHero";

const growOnHover = `
  transform: scale(1);
  transition: all .3s ease;
  &:hover {
    transform: scale(1.1);
    transition: all .3s ease;
  }
`;

const Wrap = styled.div`
  font-family: Atlanta;
  color: ${Theme.hex("textPrimary")};
  h4 {
    color: ${COLORS.LIGHT_BLUE};
  }
  .row {
    margin-top: 1rem;
    margin-bottom: 1rem;
    &.border-top-bot {
      border-top: 1px solid ${COLORS.LIGHT_BLUE};
      border-bottom: 1px solid ${COLORS.LIGHT_BLUE};
      padding: 1rem 0;
      margin-top: 3rem;
    }
  }
  button {
    border: none;
    padding: 0.25rem 2rem;
    background: ${COLORS.LIGHT_BLUE};
    color: white;
    clip-path: polygon(5% 0%, 100% 0%, 100% 60%, 95% 100%, 0% 100%, 0% 40%);
    transform: scale(1);
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
      transition: all 0.3s ease;
    }
  }
  .centered {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
const PullUp = styled.div`
  position: relative;
  top: -7rem;
`;
const PreviewWrap = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  .gatsby-image-wrapper {
    width: 65vw;
    max-width: 65rem;
  }
  @media only screen and (max-width: 575px) {
    .gatsby-image-wrapper {
      width: 90vw;
    }
  }
`;
const CTA = styled.a`
  padding: 0.25rem 2rem;
  background: ${COLORS.LIGHT_BLUE};
  color: white;
  text-decoration: none;
  clip-path: polygon(5% 0%, 100% 0%, 100% 60%, 95% 100%, 0% 100%, 0% 40%);
  transform: scale(1);
  transition: all 0.3s ease;
  &:hover {
    color: white;
    text-decoration: none;
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`;
const LeftCol = styled(Col)`
  border-right: 1px solid ${COLORS.LIGHT_BLUE};
  padding-right: 1rem;
  margin-top: 1rem;
  h4 {
    margin-bottom: 1.5rem;
  }
  .tma-cta-wrap {
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    a {
      display: block;
      border: 3px solid ${COLORS.LIGHT_BLUE};
      color: ${Theme.hex("textPrimary")};
      padding: 1rem;
      width: 20rem;
      font-weight: bold;
      ${growOnHover}
      &:hover {
        text-decoration: none;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    border-right: none;
  }
`;
const RightCol = styled(Col)`
  margin-top: 1rem;
  ul {
    padding-left: 0;
    .custom-li {
      display: flex;
      justify-content: flex-start;
      position: relative;
      left: -0px;
      svg {
        position: relative;
        top: -37px;
        fill: ${COLORS.LIGHT_BLUE};
      }
      span {
        span {
          color: ${COLORS.LIGHT_BLUE};
        }
      }
      &:nth-of-type(2) {
        left: -6px;
        svg {
          left: 3px;
          transform: scale(0.8);
        }
      }
      &:nth-of-type(3) {
        svg {
          transform: scale(1.1);
        }
      }
    }
  }
  @media only screen and (min-width: 1200px) {
    .custom-li {
      &:nth-of-type(2) {
        top: 9px;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    .custom-li {
      &:nth-of-type(2) {
        left: -8px !important;
      }
    }
  }
`;

const WhatIsVisionsTMA = ({
  data
}: {
  data: { lp: AngledLandingPageQuery };
}) => {
  const { lp } = data;
  const {
    shortText1,
    shortText2,
    shortText3,
    shortText4,
    shortText5,
    shortText6,
    shortText7,
    richText1,
    richText2,
    richText3,
    richText4,
    file1,
    file2
  } = lp;

  return (
    <Wrap>
      <WhatIsHeaderAndHero
        titleLine1={shortText1}
        titleLine2={shortText2}
        bg={new Img(file1)}
      />
      <PullUp>
        <PreviewWrap>
          <WmkImage
            image={new Img(file2)}
            style={{ filter: `hue-rotate(180deg)` }}
          />
        </PreviewWrap>
        <Container>
          <Row>
            <Col>
              <RichTextReact content={new RichText(richText1!)} />
            </Col>
          </Row>
          <Row>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <CTA href={shortText4} target="_blank" rel="noopener noreferrer">
                {shortText3}
              </CTA>
            </Col>
          </Row>
          <Row>
            <LeftCol md={12} lg={6}>
              <RichTextReact content={new RichText(richText2!)} />
              <div className="tma-cta-wrap centered">
                <p>{shortText5}</p>
                <a href={shortText7} target="_blank" rel="noopener noreferrer">
                  {shortText6}
                </a>
              </div>
            </LeftCol>
            <RightCol md={12} lg={6}>
              <div style={{ padding: `0 3vh` }}>
                <RichTextReact content={new RichText(richText3!)} />
              </div>
            </RightCol>
          </Row>
          <Row className="border-top-bot">
            <Col className="centered">
              <RichTextReact content={new RichText(richText4!)} />
              <FormWrap>
                <NetlifyForm
                  config={{ name: "what_is_tma_form" }}
                  fields={[
                    { as: "name" },
                    { as: "email" },
                    {
                      as: "single",
                      props: {
                        name: "company",
                        label: "Company"
                      }
                    },
                    { as: "phone" },
                    { as: "message", props: { label: "Details (optional)" } }
                  ]}
                />
              </FormWrap>
            </Col>
          </Row>
        </Container>
      </PullUp>
    </Wrap>
  );
};

export default WhatIsVisionsTMA;
