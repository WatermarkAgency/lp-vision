import React from "react";
import Layout from "../components/layout/MainLayout";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import TYHero from "../components/routes/ThankYou/ThankYouHero";
import styled from "styled-components";

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
  const { ty } = data;
  const { headline, image, message } = ty;
  return (
    <Layout>
      <TYHero bgImage={image} headline={headline} />
      <MessageWrap fluid>
        <Container>
          <Row>
            <Col>
              <h2 className="message">{message.copy}</h2>
            </Col>
          </Row>
        </Container>
      </MessageWrap>
    </Layout>
  );
};

export const query = graphql`
  query lpQuery($slug: String!) {
    ty: contentfulThankYouPages(slug: { eq: $slug }) {
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
    }
  }
`;
