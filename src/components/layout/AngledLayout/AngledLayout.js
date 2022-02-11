/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { MainLayout } from "wmk-lib";
import styled from 'styled-components';

import VisionHeader from "./Header/VisionHeader";
import VisionFooter from "./Footer/VisionFooter";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  .container {
    width: 80vw !important;
  }
`

const Layout = ({ children, angle }) => {
  return (
    <Wrap>
      <MainLayout
        Header={() => <VisionHeader angle />}
        Footer={() => <VisionFooter />}
      >
        {children}
      </MainLayout>
    </Wrap>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
