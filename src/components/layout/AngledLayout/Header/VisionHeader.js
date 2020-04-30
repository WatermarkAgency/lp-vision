import React from "react";
import { CtflLogo } from "wmk-lib";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components";
import Theme from "../../../../vars/ThemeOptions"

const HeaderWrap = styled.div`
position: relative;
`;

const Wrap = styled.div`
  position: relative;
  z-index: 100;
  .inner-wrap {
    position: relative;
    z-index: 10;
    padding: 4vw 6vw 2vw 6vw;
    background: ${Theme.hex('orange')};
    clip-path: polygon(0 0, 100% 0%, 100% 65%, 0% 100%);
    .logo-wrap {
      width: 200px;
      height: 100px;
    }
  }
  .dark-bot-border {
    position: absolute;
    z-index: -10;
    width: 100%;
    height: 100%;
    left: 0;
    top: 8%;
    background: gray;
    clip-path: polygon(0 0, 100% 0%, 100% 65%, 0% 100%);
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
      <Wrap>
        <div className="inner-wrap">
          <Container>
            <div className="logo-wrap">
              <CtflLogo
                contentType={logoWhite.file.contentType}
                fluid={logoWhite.fluid}
                alt={logoWhite.title}
                target="_self"
                to={"https://visiongraphics-inc.com/"}
              />
            </div>
          </Container>
        </div>
        <div className="dark-bot-border" />
      </Wrap>
    </HeaderWrap>
  );
};

export default VisionHeader;
