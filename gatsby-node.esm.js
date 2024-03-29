const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  //const pageTemplate = path.resolve("./src/node/page.tsx");
  const pageAngledTemplate = path.resolve("./src/node/pageAngled.tsx");
  const tyTemplate = path.resolve("./src/node/ty.tsx");
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
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // // Create site pages
    // result.data.pages.edges.forEach((edge) => {
    //   if (!edge.node.slug.match(/schema/i)) {
    //     createPage({
    //       // Path for this page — required
    //       path: `lp/${edge.node.slug}`,
    //       component: pageTemplate,
    //       context: edge.node
    //     });
    //   }
    // });

    // Create angled site pages
    result.data.pagesAngled.edges.forEach((edge) => {
      createPage({
        // Path for this page — required
        path: `lp/${edge.node.slug}`,
        component: pageAngledTemplate,
        context: edge.node
      });
    });

    // Create site pages
    result.data.thanks.edges.forEach((edge) => {
      createPage({
        // Path for this page — required
        path: `ty/${edge.node.slug}`,
        component: tyTemplate,
        context: edge.node
      });
    });
  });
};
