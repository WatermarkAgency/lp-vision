import Theme from "./src/vars/ThemeOptions";

const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  createRedirect({
    fromPath: "/",
    toPath: `${Theme.paths.home}`,
    isPermanent: true,
    redirectInBrowser: true
  });
  const pageTemplate = path.resolve("./src/node/page.js");
  const pageAngledTemplate = path.resolve("./src/node/pageAngled.js");
  const tyTemplate = path.resolve("./src/node/ty.js");
  const isoTemplate = path.resolve("./src/node/isoMap.js");
  createRedirect({
    fromPath: "/home",
    toPath: `/`,
    isPermanent: true,
    redirectInBrowser: true
  });
  createRedirect({
    fromPath: `${Theme.paths.home}`,
    toPath: `/`,
    isPermanent: true,
    redirectInBrowser: true
  });
  return graphql(`
    {
      pages: allContentfulLandingPages {
        edges {
          node {
            slug
            title
          }
        }
      }
      pagesAngled: allContentfulLandingPagesAngled {
        edges {
          node {
            slug
            title
          }
        }
      }
      thanks: allContentfulThankYouPages {
        edges {
          node {
            slug
            title
          }
        }
      }
      isoMap: allContentfulIsometricMapPage {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create site pages
    result.data.pages.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `lp/${edge.node.slug}`,
        component: pageTemplate,
        context: edge.node
      });
    });

    // Create angled site pages
    result.data.pagesAngled.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `lp/${edge.node.slug}`,
        component: pageAngledTemplate,
        context: edge.node
      });
    });

    // Create site pages
    result.data.thanks.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `ty/${edge.node.slug}`,
        component: tyTemplate,
        context: edge.node
      });
    });

    // Create isometric map page
    result.data.isoMap.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `/${edge.node.slug}`,
        component: isoTemplate,
        context: edge.node
      });
    });
  });
};
