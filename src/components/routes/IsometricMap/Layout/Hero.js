import React from 'react'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'
 
const Hero = ({ bg }) => {
  return (
    <Wrap>
      <InnerWrap style={{backgroundImage: `url(` + bg.file.url + `)`, backgroundSize: 'cover', backgroundPosition: '75% 0%'}}>
        <h2>Capabilities Matter!</h2>
        <h4>Tour our facility to see how our capabilities make an impact</h4>
        <div className="copy-wrap">
          <p>When it comes to getting the job done, it is important that you have the right partner by your side. At Vision, we have the facilities and equipment to complete your project all in house under one roof, enabling our customers to refine and streamline their communications to bring their Vision to life.</p>
        </div> 
        <a href="#iso-map" className="see-below">
          <p>See Below</p>
          <div className="chevron-wrap">
            {/* <IoIosArrowDown /> */}
            <p>v</p>
          </div>          
        </a>
        <div className="download-wrap">
          <a href="https://visiongraphics.netlify.app/lp/tangible-marketing-automation" target="_blank" rel="noreferrer" className="download">
            <p>Learn about Tangible Marketing Automation Services</p>
            <p>Download our White Paper Today!</p>            
          </a>
          <div className="arrow-circle">
            <a href="https://visiongraphics.netlify.app/lp/tangible-marketing-automation" target="_blank" rel="noreferrer">{`>`}</a>
          </div>
        </div>
        <div className="dark-overlay" />
      </InnerWrap>     
    </Wrap>
  )
}
 
export default Hero



const visOrange = '#F15C2B';

const Wrap = styled.div`
  position: relative;
  z-index: 10;
  background: ${visOrange};
  clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%);
`
const InnerWrap = styled.div`
  position: relative;
  width: 100%;
  clip-path: polygon(0% 10%, 80% 0%, 100% 0%, 100% 100%, 0% 100%);
  padding: 4rem 25vw 10rem 25vw;
  background: gray;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    position: relative;
    z-index: 10;
    white-space: nowrap;
    font-weight: 600;
  }
  h4 {
    position: relative;
    z-index: 10;
    font-weight: 200;
    white-space: nowrap;
    margin-bottom: 2rem;
  }
  .copy-wrap {
    position: relative;
    z-index: 10;
    text-align: left;
    padding-left: 2rem;
    border-left: 10px solid ${visOrange};
    p {
      margin: 0;
      font-weight: 200;
    }
  }
  a.see-below {
    position: absolute;
    bottom: 15%;
    z-index: 20;
    color: white;
    font-weight: 500;
    font-size: 1.5rem;
    :hover {
      text-decoration: none;
    }
    p:first-of-type {
      margin-bottom: -1rem;
    }
    .chevron-wrap {
      // transform: scale(5, 2);
      p {
        color: ${visOrange};
        font-size: 2rem;
        font-weight: 100;
        transform: scale(5, 1);
      }
    }
  }
  .download-wrap {
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    a.download {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: absolute;
      z-index: 20;
      right: 0;
      background: ${visOrange};
      color: white;
      width: 15rem;
      padding: 2rem .5rem 3rem 1rem;
      clip-path: polygon(0% 15%, 100% 0%, 100% 90%, 10% 100%);
      :hover {
        text-decoration: none;
      }
      p {
        margin: 0;
      }
      p:first-of-type {
        font-size: 12px;
        font-weight: 100;
        margin-bottom: 7px;
      }
      p:last-of-type {
        font-size: 20px;
        font-weight: 300;
        line-height: 22px;
      }
    }
    .arrow-circle {
      position: relative;
      z-index: 20;
      bottom: -4.75rem;
      right: 6rem;
      a {
        color: ${visOrange};
        background: white;      
        padding: 0px 8px 3px 9px;
        border-radius: 50%;
        font-size: 25px;
        font-weight: 200;
        :hover {
          text-decoration: none;
        }
      }
    }
  }
  .dark-overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.75);
  }
  @media only screen and (max-width: 1150px) {
    a.download, .arrow-circle {
      display: none !important;
    }
  }
  @media only screen and (max-width: 700px) {
    padding: 4rem 10vw 10rem 10vw;
    h2 {
      white-space: normal;
    }
    h4 {
      white-space: normal;
    }
  }
`