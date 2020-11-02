import React from "react";
import Layout from "../components/layout/MainLayout/MainLayout";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import TYHero from "../components/routes/ThankYou/ThankYouHero";
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
  const { headline, image, message } = lp;
  const { copy } = message ? message : { copy: null };
  return (
    <Layout>
      <TYHero bgImage={image} headline={headline} />
      <MessageWrap fluid>
        <Container>
          <Row className="flex-column">
            <Col>
              <div className="message">{copy}</div>
            </Col>
            {/* <Col>
              <SharpSpringForm
                account={code.account}
                formID={code.formID}
                formDomain={code.formDomain}
                scriptSrc={code.scriptSrc}
                title={code.title}
              />
            </Col> */}
          </Row>
        </Container>
      </MessageWrap>
    </Layout>
  );
};

export const query = graphql`
  query pageQuery($slug: String!) {
    lp: contentfulLandingPages(slug: { eq: $slug }) {
      slug
      title
      headline
      image: backgroundImage {
        fluid(maxWidth: 1600, quality: 90) {
          ...GatsbyContentfulFluid
        }
        title
      }
      message {
        copy: message
      }
      code: marketingAutomationForm {
        title
        scriptSrc
        formId
        formDomain
        account
      }
    }
  }
`;
