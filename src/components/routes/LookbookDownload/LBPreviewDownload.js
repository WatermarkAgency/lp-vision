import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Theme from '../../../vars/ThemeOptions'
 
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 10;
  top: -18vw;
  .gatsby-image-wrapper {
    width: 70vw;
  }
  a {
    background: ${Theme.hex('primary')};
    color: ${Theme.hex('white')};
    font-weight: 300;
    padding: 5px 15px;
    margin: 2rem 0;
    clip-path: polygon(5% 0%, 100% 0%, 100% 60%, 95% 100%, 0% 100%, 0% 40%);
    transform: scale(1);
    transition: transform .3s ease;
    :hover {
      text-decoration: none;
      transform: scale(1.1);
      transition: transform .3s ease;
    }
  }
  @media only screen and (min-width: 1300px) {
    top: -15rem;
    .gatsby-image-wrapper {
      width: 980px;
    }
  }
  @media only screen and (max-width: 700px) {
    top: -20vw;
    .gatsby-image-wrapper {
      width: 85vw;
    }
  }
`
 
const LBPreviewDownload = ({ preview, buttonCopy }) => {
  console.log("preview: ", preview)
  const { fluid, title } = preview ? preview : { preview: null }
  return (
    <Wrap className="flex-col">
      <Img fluid={fluid} alt={title} />
      <a href="#" role="download" download>
        {buttonCopy}
      </a>
    </Wrap>
  )
}
 
export default LBPreviewDownload