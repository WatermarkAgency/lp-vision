import * as React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { COLORS } from "../../../vars/colors";
import Theme from "../../../vars/ThemeOptions";

const WrapCont = styled(Container)`
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  p {
    color: ${Theme.hex("textPrimary")};
    padding: 10px 0 15px 0;
    margin: 4rem 0 0 0;
    border-top: 1px solid ${COLORS.LIGHT_BLUE};
    border-bottom: 1px solid ${COLORS.LIGHT_BLUE};
  }
`;

const LBBotCopy = ({ shortText3 }: { shortText3: string }) => {
  return (
    <WrapCont>
      <p>{shortText3}</p>
    </WrapCont>
  );
};

export default LBBotCopy;
