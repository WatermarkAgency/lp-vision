import React from "react";
import styled from "styled-components";
import VisionAngle from "./VisionAngle";
import { WmkLink } from "wmk-link";
import OneVisionLogo from "../../OneVisionLogo";

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
  return (
    <HeaderWrap>
      <Wrap>
        <WmkLink to={"https://1vision.netlify.app/"}>
          <OneVisionLogo />
        </WmkLink>
      </Wrap>
      <VisionAngle />
    </HeaderWrap>
  );
};

export default VisionHeader;
