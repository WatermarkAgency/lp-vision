import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
 
const Wrap = styled.div`
  
`
 
const PreviewPDF = ({ images }) => {
  console.log(images)
  return (
    <Wrap>
      <Img fluid={images[0].fluid} alt={images[0].title} />
    </Wrap>
  )
}
 
export default PreviewPDF