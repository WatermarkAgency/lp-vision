import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Theme from "../../../vars/ThemeOptions";
import { COLORS } from "../../../vars/colors";
import { RichText } from "wmk-rich-text";
import { RichTextReact } from "../../RichText/RichTextReact";

const WrapCont = styled(Container)`
  .content-col {
    &.left {
      padding-right: 2rem;
      border-right: 1px solid ${COLORS.LIGHT_BLUE};
      p {
        font-weight: normal;
        color: ${Theme.hex("textPrimary")};
      }
    }
    &.right {
      padding-left: 2rem;
      p {
        margin-bottom: 5px;
        color: ${COLORS.LIGHT_BLUE};
        font-weight: bold;
      }
      ul {
        padding-left: 0;
        .custom-li {
          display: flex;
          justify-content: flex-start;
          position: relative;
          left: -11px;
          svg {
            position: relative;
            top: -5px;
            fill: ${COLORS.LIGHT_BLUE};
            transform: scaleY(0.8);
          }
          p {
            color: ${Theme.hex("textPrimary")};
            font-weight: 300;
            margin-bottom: 0;
            max-width: 90%;
          }
          &:nth-of-type(2) {
            top: -4px;
          }
        }
      }
    }
  }
`;

const LBMainCopy = ({
  richText1,
  richText2
}: {
  richText1: RichText;
  richText2: RichText;
}) => {
  return (
    <WrapCont>
      <Row>
        <Col sm={12} md={6} className="content-col left">
          <RichTextReact content={richText1} />
        </Col>
        <Col sm={12} md={6} className="content-col right">
          <RichTextReact content={richText2} />
        </Col>
      </Row>
    </WrapCont>
  );
};

export default LBMainCopy;
