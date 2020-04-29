import React from "react";
import Layout from "../components/layout/AngledLayout/AngledLayout";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
// import SharpSpringForm from "../components/common/SharpForm";

const MessageWrap = styled(Container)`
  background: #f5f5f5;
  .message {
    padding: 6vw 0;
    margin: auto;
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export default ({ pageContext, data }) => {
  const { lp } = data;
  console.log(data)
  const { headline, image, message, code } = lp;
  const { copy } = message ? message : { copy: null };
  return (
    <Layout>
      <MessageWrap fluid>
        <Container>
          <Row className="flex-column">
            <Col>
              <div className="message">{copy}</div>
            </Col>
            <Col>
              {/* <SharpSpringForm
                account={code.account}
                formID={code.formID}
                formDomain={code.formDomain}
                scriptSrc={code.scriptSrc}
                title={code.title}
              /> */}
            </Col>
          </Row>
        </Container>
      </MessageWrap>
    </Layout>
  );
};

export const query = graphql`
  query pageAngledQuery($slug: String!) {
    lp: contentfulLandingPagesAngled(slug: { eq: $slug }) {
      title
      slug
      pageTitleFirstLine
      pageTitleSecondLine
      pageSubtitle
      mainCopy {
        json
      }
      buttonText
      formCopy
      bookPreviewPages {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
