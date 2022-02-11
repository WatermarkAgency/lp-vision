import React from 'react'
import styled from 'styled-components'
import { WmkImage as Img, Img as ImgClass } from 'wmk-image'
import Theme from '../../../../vars/ThemeOptions'

const HeroWrap = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 13rem 0 10rem 0;
  h1, h2 {
    position: relative;
    z-index: 5;
    color: ${Theme.hex('white')};
    text-shadow: 0px 3px 6px rgba(0,0,0,0.3);
    text-align: center;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 0;
  }
  h1 {
    font-size: 2.7rem;
    text-transform: uppercase;
    font-weight: bold;
  }
  .image-wrap {
    .gatsby-image-wrapper, .dark-overlay {
      width: 100%;
      height: 100%;
      position: absolute !important;
      top: 0;
      left: 0;
    }
    .gatsby-image-wrapper {
      z-index: 1;
    }
    .dark-overlay {
      z-index: 2;
      background: rgba(0,0,0,0.4);
    }
  }
`
 
const LBHero = ({ titleLine1, titleLine2, bg }) => {
  return (
    <HeroWrap>
      <h2>
        {titleLine1}
      </h2>
      <h1>
        {titleLine2}
      </h1>
      <div className="image-wrap">
        <Img fluid={bg.fluid} alt={bg.title} />
        <div className="dark-overlay" />
      </div>        
    </HeroWrap>
  )
}
 
export default LBHero