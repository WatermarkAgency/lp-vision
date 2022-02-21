/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { MainLayout } from "wmk-lib";
import styled from "styled-components";

import VisionHeader from "./Header/VisionHeader";
import VisionFooter from "./Footer/VisionFooter";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }: { children: React.ReactChildren }) => {
  return (
    <Wrap>
      <MainLayout
        Header={() => <VisionHeader />}
        Footer={() => <VisionFooter />}>
        {children}
      </MainLayout>
    </Wrap>
  );
};

export default Layout;
