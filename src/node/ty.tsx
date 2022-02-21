import React from "react";
import Layout from "../components/layout/MainLayout/MainLayout";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import TYHero from "../components/routes/ThankYou/ThankYouHero";
import styled from "styled-components";
import { ContentfulImageQuery } from "wmk-image";

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

export default ({ data }: ThankYouPageQuery) => {
  const { ty } = data;
  const { headline, image, message } = ty;
  return (
    <Layout>
      <TYHero bgImage={image} headline={headline} />
      <MessageWrap fluid>
        <Container>
          <Row>
            <Col>
              {message?.copy ? (
                <h2 className="message">{message.copy}</h2>
              ) : null}
            </Col>
          </Row>
        </Container>
      </MessageWrap>
    </Layout>
  );
};

interface ThankYouPageQuery {
  data: {
    ty: {
      slug: string;
      title: string;
      headline?: string;
      image?: ContentfulImageQuery;
      message?: { copy: string };
    };
  };
}

export const query = graphql`
  query lpQuery($slug: String!) {
    ty: contentfulThankYouPages(slug: { eq: $slug }) {
      slug
      title
      headline
      image: backgroundImage {
        ...NodeImageFields
        gatsbyImageData
      }
      message {
        copy: message
      }
    }
  }
`;
