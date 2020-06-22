/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";
import { MainLayout } from "wmk-lib";
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import VisionHeader from "./Header/VisionHeader"
import VisionFooter from "./Footer/VisionFooter";

const Wrap = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <Wrap>
      <Helmet>
        <!-- Google Tag Manager -->
          <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T2XP682');</script>
        <!-- End Google Tag Manager -->

        <!-- Google Tag Manager (noscript) -->
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T2XP682"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
      </Helmet>
      <MainLayout
        Header={() => <VisionHeader />}
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
