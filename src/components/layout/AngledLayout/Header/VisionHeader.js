import React from "react";
import { ContentfulLogo } from "wmk-lib";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components";
import Theme from "../../../../vars/ThemeOptions"

const HeaderWrap = styled.div`
  position: relative;
  .logo-wrap {
    width: 25%;
    height: auto;
    padding: 5% 0;
    margin-bottom: 5vw;
  }
  .bg-div {
    position: absolute;
    top: -20%;
    left: -5%;
    z-index: -10;
    height: 20vw;
    width: 110%;
    background: ${Theme.hex('orange')};
    transform: ${Theme.transform.angle};
    border-bottom: 10px solid gray;
  }
`;

const VisionHeader = () => {
  const { options } = useStaticQuery(graphql`
    {
      options: contentfulGlobal {
        logoWhite {
          file {
            contentType
            url
          }
          fluid {
            ...GatsbyContentfulFluid
          }
          title
        }
      }
    }
  `);
  const { logoWhite } = options;
  return (
    <HeaderWrap>
      <Container>
        <div className="logo-wrap">
          <ContentfulLogo
            contentType={logoWhite.file.contentType}
            fluid={logoWhite.fluid}
            alt={logoWhite.title}
            target="_self"
            to={"https://visiongraphics-inc.com/"}
          />
        </div>
      </Container> 
      <div className="bg-div" />
    </HeaderWrap>
  );
};

{/* <Container>
<div className="logo-wrap">
  <ContentfulLogo
    contentType={logoWhite.file.contentType}
    fluid={logoWhite.fluid}
    alt={logoWhite.title}
    target="_self"
    to={"https://visiongraphics-inc.com/"}
  />
</div>
</Container> */}

export default VisionHeader;
