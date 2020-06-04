import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Theme from '../../../vars/ThemeOptions'
 
const Wrap = styled.div`
  padding: 5vw 15vw;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Theme.hex('orange')};
  .title {
    transform: ${Theme.transform.angle};      
    text-transform: uppercase;
    h2 {
      white-space: nowrap;
      font-weight: bold;
      font-size: 10vw;
    }      
  }
  .image-and-download {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .learn-more {
      text-transform: uppercase;
      font-size: .9rem;
      width: 60%;
      line-height: 1.2;
      text-align: center;
    }
    .image-wrap {
      height: auto;
      width: 25rem;
      margin-top: -0rem;
      position: relative;
      z-index: 10;
      .gatsby-image-wrapper {
        position: relative;
        z-index: 10;
        width: 100%;
        padding: 0 15px;
        background: white;
      }
      .angled-line {
        background: ${Theme.hex('orange')};
        width: 150vw;
        height: 2px; 
        transform: ${Theme.transform.angle};
        position: relative;
        z-index: 0;
        top: -6vw;
        left: -40vw;
      }
    }
    .download-button {
      margin-top: 2rem;
      button {
        background: ${Theme.hex('orange')};        
        text-transform: uppercase;
        font-weight: bold;
        border: none;
        transform: ${Theme.transform.angle};
        a {
          color: ${Theme.hex('white')} !important;
          text-decoration: none;
        }
      }
    }
  }
  @media only screen and (max-width: 800px) {
    .title {
      h2 {
        white-space: normal;
        font-size: 18vw;
        text-align: center;
        line-height: 18vw;
      }      
    }
    .learn-more {
      font-size: 2vw !important;
      width: 40vw !important;
    }
    .image-wrap {
      width: 70vw !important;
      .angled-line {
        top: -8vw !important;
      }
    }
    button {
      font-size: 4vw;
      white-space: nowrap;
    }
  }
`
 
const ThankYou = ({ thankYouTitle, thankYouCopy, downloadButtonCopy, downloadPreview }) => {
  return (
    <Wrap>
      <div className="title">
        <h2>{thankYouTitle}</h2>
      </div>
      <div className="image-and-download">
        <p className="learn-more">{thankYouCopy}</p>
        <div className="image-wrap">
          <Img fluid={downloadPreview.fluid} alt={downloadPreview.title} />
          <div className="angled-line" />
        </div>
        <div className="download-button">
          <button>
            <a download="https://cdn2.hubspot.net/hubfs/526959/Tangible_Marketing_Automation.pdf" href="https://cdn2.hubspot.net/hubfs/526959/Tangible_Marketing_Automation.pdf" target="_blank">
              {downloadButtonCopy}
            </a>
          </button>
        </div>        
      </div>
      
    </Wrap>
  )
}
 
export default ThankYou