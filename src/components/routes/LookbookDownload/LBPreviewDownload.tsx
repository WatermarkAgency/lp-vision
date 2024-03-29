import * as React from "react";
import styled from "styled-components";
import Theme from "../../../vars/ThemeOptions";
import { Container, Row, Col } from "react-bootstrap";
import { COLORS } from "../../../vars/colors";
import { Img, WmkImage } from "wmk-image";

const WrapCont = styled(Container)`
  .content-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
    .gatsby-image-wrapper {
      width: 90%;
    }
    a {
      background: ${COLORS.LIGHT_BLUE};
      color: ${Theme.hex("white")};
      font-size: 1.4rem;
      font-weight: 300;
      padding: 7px 25px;
      margin: 2rem 0 4rem 0;
      clip-path: polygon(5% 0%, 100% 0%, 100% 60%, 95% 100%, 0% 100%, 0% 40%);
      transform: scale(1);
      transition: transform 0.3s ease;
      &:hover {
        text-decoration: none;
        transform: scale(1.1);
        transition: transform 0.3s ease;
      }
    }
  }
`;

const LBPreviewDownload = ({
  preview,
  buttonCopy
}: {
  preview: Img;
  buttonCopy: string;
}) => {
  return (
    <WrapCont>
      <Row>
        <Col className="content-col">
          <WmkImage image={preview} />
          <a
            href="/assets/Lookbook_Project_Design_Options.pdf"
            role="download"
            download>
            {buttonCopy}
          </a>
        </Col>
      </Row>
    </WrapCont>
  );
};

export default LBPreviewDownload;
