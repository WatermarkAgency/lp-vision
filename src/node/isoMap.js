import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Header from '../components/routes/IsometricMap/Layout/Header'
import Footer from '../components/routes/IsometricMap/Layout/Footer'
import IsoMapPage from '../components/routes/IsometricMap/IsoMapPage'
 
const Wrap = styled.div`
 
`
 
const isoMap = ({ pageContext, data }) => {
  // console.log("sectionsData: ", data.isoMap.sections)
  return (
    <Wrap>
      <Header />
      <IsoMapPage sectionsData={data.isoMap.sections} heroBG={data.heroBG} />
      <Footer />
    </Wrap>
  )
}
 
export default isoMap

export const query = graphql`
  query isoMapQuery($slug: String!) {
    isoMap: contentfulIsometricMapPage(slug: { eq: $slug }) {
      slug
      title
      sections {
        title
        backgroundOnHover {
          title
          fluid(maxWidth: 3080, quality: 25) {
            ...GatsbyContentfulFluid
          }
          file {
            url
          }
        }
        sectionPieces {
          title
          copy {
            json
          }
          pieceImage {
            title
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    heroBG: contentfulAsset(title: {eq: "Iso Map Hero BG"}) {
      file { 
        url
      }
    }
  }
`