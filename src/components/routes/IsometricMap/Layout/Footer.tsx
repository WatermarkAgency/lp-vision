import * as React from "react";
import styled from 'styled-components'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagram, FaYoutubeSquare } from 'react-icons/fa'
 
const visOrange = '#F15C2B';

const Wrap = styled.div`
  width: 100%;
  margin-top: 5rem;
  position: relative;
  z-index: 10000;
  .content-wrap {
    clip-path: polygon(0% 20%, 100% 0%, 100% 100%, 0% 100%);
    background: url(https://visiongraphics-inc.com/wp-content/themes/vision-graphics-v2/assets/images/footer-bg.jpg) no-repeat bottom center;
    padding-top: 7rem;
    padding-bottom: 60px;
    background-size: cover;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    .info-piece {
      display: flex;
      margin: 15px 0;
      .title {
        width: 200px;
        text-align: right;
        margin-top: -5px;
        margin-right: 15px;
        font-size: 1.5rem;
        font-weight: 200;
      }
      .info {
        font-size: 1.1rem;
        font-weight: 200;
        a {
          &:hover {
            text-decoration: none;
          }
          color: white;
          &.map {
            color: ${visOrange};
            &:hover {
              color: white;
            }
          }
        }     
        .socials {
          display: flex;
          a {
            color: ${visOrange};
            margin-right: 2px;
            font-size: 1.4rem;
            &:hover {
              color: white;
            }
          }
        }   
      }
    }
    p {
      margin: 0;
    }
  }
  .copyright-bar {
    background: #2A2929;
    padding: 30px;
    position: relative;
    p {
      color: #898888;
      font-size: .9rem;
      font-weight: 200;
      margin-bottom: 5px;
      a {
        color: #898888;
        &:hover {
          color: white;
          text-decoration: none;
        }
      }
      :last-of-type {
        position: absolute;
        right: 30px;
        bottom: 30px;
      }
    }
  }
  @media only screen and (min-width: 2000px) {
    .content-wrap {
      clip-path: polygon(0% 50%, 100% 0%, 100% 100%, 0% 100%);
    }
  }
  @media only screen and (min-width: 1350px) and (max-width: 2000px) {
    .content-wrap {
      clip-path: polygon(0% 30%, 100% 0%, 100% 100%, 0% 100%);
    }
  }
  @media only screen and (max-width: 800px) {
    .content-wrap {
      clip-path: polygon(0% 10%, 100% 0%, 100% 100%, 0% 100%);
    }
  }
`
 
const VisionFooter = props => {
  return (
    <Wrap>
      <div className="content-wrap">
        <div className="logo-wrap">
          <a href="https://visiongraphics-inc.com/">
            <img src="https://visiongraphics-inc.com/wp-content/themes/vision-graphics-v2/assets/images/footer_logo.png" alt="Vision Graphics Logo" />
          </a>
        </div>
        <div className="info-wrap">
          <div className="info-piece">
            <div className="title">
              <p>Address</p>
            </div>
            <div className="info">
              <p>5105 E 41st Ave</p> 
              <p>Denver, CO 80216</p>
              <a className="map" href="https://goo.gl/maps/2XjaUyfXRHK2" target="_blank" rel="noopener noreferrer">Map It</a>
              <div className="socials">
                <a href="https://www.facebook.com/visiongraphicsinc/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookSquare />
                </a>
                <a href="https://twitter.com/printvgi" target="_blank" rel="noopener noreferrer">
                  <FaTwitterSquare />
                </a>
                <a href="https://www.linkedin.com/company/488282/admin/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/visiongraphicsinc/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.youtube.com/channel/UCpEmhh4qrgYw5DRkEYFakEA" target="_blank" rel="noopener noreferrer">
                  <FaYoutubeSquare />
                </a>
              </div>
            </div>
          </div>  
          <div className="info-piece">
            <div className="title">
              <p>Phone</p>
            </div>
            <div className="info">
              <a href="tel:18008334263" target="_blank" rel="noopener noreferrer">1-800-833-4263</a>
            </div>
          </div>  
          <div className="info-piece">
            <div className="title">
              Local
            </div>
            <div className="info">
              <a href="tel:3033205411" target="_blank" rel="noopener noreferrer">303-320-5411</a>
            </div>
          </div>  
          <div className="info-piece">
            <div className="title">
              Email
            </div>
            <div className="info">
              <a href="mailto:webinfo@visiongraphics-inc.com" target="_blank" rel="noopener noreferrer">webinfo@visiongraphics-inc.com</a>
            </div>
          </div>          
        </div>
      </div>
      <div className="copyright-bar">
        <p>Copyright © 2020 Vision Graphics. All Rights Reserved.</p>
        <p><a href="https://visiongraphics-inc.com/hipaa-compliance/" target="_blank" rel="noopener noreferrer">HIPAA Compliance</a></p>
        <p>Web Design by Anchor Wave</p>
      </div>
    </Wrap>
  )
}
 
export default VisionFooter