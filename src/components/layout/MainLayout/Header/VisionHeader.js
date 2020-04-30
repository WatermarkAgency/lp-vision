import React from "react";
import { ContentfulLogo } from "wmk-lib";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import VisionAngle from "./VisionAngle";

const HeaderWrap = styled.div`
position: relative;
.angle {
    position: absolute;
    opacity: .85;
}
`;

const Wrap = styled.div`
  padding: 4vh 6vw;
`;

const VisionHeader = () => {
  const { options } = useStaticQuery(graphql`
    {
      options: contentfulGlobal {
        logo {
          file {
            contentType
            url
          }
          fixed(width: 267, height: 67) {
            ...GatsbyContentfulFixed
          }
          title
        }
      }
    }
  `);
  const { logo } = options;
  return (
    <HeaderWrap>
      <Wrap>
        <ContentfulLogo
          contentType={logo.file.contentType}
          fixed={logo.fixed}
          alt={logo.title}
          target="_self"
          to={"https://visiongraphics-inc.com/"}
        />
      </Wrap>
      <VisionAngle />
    </HeaderWrap>
  );
};

export default VisionHeader;
