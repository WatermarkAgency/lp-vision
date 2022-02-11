import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import VisionAngle from "./VisionAngle";
import { WmkLink } from "wmk-link";
import { Img, WmkImage } from "wmk-image";

const HeaderWrap = styled.div`
  position: relative;
  .angle {
    position: absolute;
    opacity: 0.85;
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
          ...NodeImageFields
          gatsbyImageData
        }
      }
    }
  `);
  const { logo } = options;
  return (
    <HeaderWrap>
      <Wrap>
        <WmkLink to={"https://visiongraphics-inc.com/"}>
          <WmkImage image={new Img(logo)} />
        </WmkLink>
      </Wrap>
      <VisionAngle />
    </HeaderWrap>
  );
};

export default VisionHeader;
