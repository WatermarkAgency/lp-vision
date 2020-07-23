import React, { useState } from 'react'
import styled from 'styled-components'
 
const visOrange = '#F15C2B';

const Wrap = styled.div`
  padding: 2rem 4rem;
  position: relative;
  header {
    position: relative;
    .content-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .menu-items-wrap {
        position: relative;
        .menu-items-row {
          height: 4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          .menu-item {
            margin: 0 5px;
            position: relative;
            button {
              border: none;
              background: none;
              font-size: 13px;
              font-weight: bold;
              a {
                color: black;
                :hover {
                  text-decoration: none;
                  color: ${visOrange};
                }
              }
            }
            .dropdown {
              background: ${visOrange};
              border: .5px solid white;
              position: absolute;
              z-index: 20;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .drop-item {
                min-width: 250px;            
                color: white;
                padding: 10px;
                font-size: 13px;
                :hover {
                  text-decoration: none;
                  background: rgba(0,0,0,0.2);
                }
              }
            }
          }
        }
        .sign-up {
          text-align: right;
          a {
            color: black;
            font-weight: bold;
            :hover {
              text-decoration: none;
              color: ${visOrange};
            }
          }
        }
      }
    }
  }
`
 
const VisionHeader = props => {
  const [currDrop, setCurrDrop] = useState('')
  return (
    <Wrap>
      <header className="header" role="banner">
        <div className="content-wrap">
          <div className="logo-wrap">
            <a href="https://visiongraphics-inc.com/">
              <img src="https://visiongraphics-inc.com/wp-content/themes/vision-graphics-v2/assets/images/vision-graphics-logo.png" alt="vision graphics logo" />
            </a>
          </div>
          <div className="menu-items-wrap">
            <div className="sign-up">
              <a href="https://visiongraphics-inc.com/promotions/">Sign Up for News & Promotion Notifications!</a>
            </div>
            <div className="menu-items-row">
              <div className="menu-item">
                <button onMouseEnter={() => setCurrDrop('services')} onMouseLeave={() => setCurrDrop('')}><a href="https://visiongraphics-inc.com/service/">Our Services</a></button>
                {currDrop === 'services' &&
                  <div className="dropdown service-drop" onMouseEnter={() => setCurrDrop('services')} onMouseLeave={() => setCurrDrop('')}>
                    <a href="https://visiongraphics-inc.com/service/print-production/" className="drop-item">
                      Printing
                    </a>
                    <a href="https://visiongraphics-inc.com/service/direct-mail/" className="drop-item">
                      Direct Mail Marketing
                    </a>
                    <a href="https://visiongraphics-inc.com/service/print-management-marketing-automation/" className="drop-item">
                      Marketing Automation
                    </a>
                    <a href="https://visiongraphics-inc.com/service/warehousing-fulfillment/" className="drop-item">
                      Warehousing and Fulfillment Center
                    </a>
                    <a href="https://visiongraphics-inc.com/service/marketing-analysis-variable-data-solutions/" className="drop-item">
                      Marketing Analytics & Variable Data
                    </a>
                    <a href="https://visiongraphics-inc.com/service/elections-and-ballots/" className="drop-item">
                      Election & Ballot Services
                    </a>
                    <a href="https://visiongraphics-inc.com/service/custom-broadband-marketing-solutions/" className="drop-item">
                      Eagle:xm Cable & Broadband Marketing
                    </a>
                  </div>
                }
              </div>
              <div className="menu-item">
                <button onMouseEnter={() => setCurrDrop('resources')} onMouseLeave={() => setCurrDrop('')}><a href="https://visiongraphics-inc.com/blog/">Client Resources</a></button>
                {currDrop === 'resources' &&
                  <div className="dropdown resources-drop" onMouseEnter={() => setCurrDrop('resources')} onMouseLeave={() => setCurrDrop('')}>
                    <a href="https://visiongraphics-inc.com/blog/" className="drop-item">
                      Blog
                    </a>
                    <a href="https://visiongraphics-inc.com/vision-news/" className="drop-item">
                      Vision News 
                    </a>
                    <a href="https://visiongraphics-inc.com/print-resources/" className="drop-item">
                      Print Resources
                    </a>
                    <a href="https://visiongraphics-inc.com/postal-guidelines/" className="drop-item">
                      Postal Guidelines
                    </a>
                    <a href="https://visiongraphics-inc.com/marketing-innovations/" className="drop-item">
                      Marketing Innovations
                    </a>
                    <a href="https://visiongraphics-inc.com/events/" className="drop-item">
                      Events
                    </a>
                  </div>
                }
              </div>
              <div className="menu-item">
                <button onMouseEnter={() => setCurrDrop('results')} onMouseLeave={() => setCurrDrop('')}><a href="https://visiongraphics-inc.com/case-studies/">Our Results</a></button>
                {currDrop === 'results' &&
                  <div className="dropdown results-drop" onMouseEnter={() => setCurrDrop('results')} onMouseLeave={() => setCurrDrop('')}>
                    <a href="https://visiongraphics-inc.com/case-studies/" className="drop-item">
                      Case Studies
                    </a>
                    <a href="https://visiongraphics-inc.com/industry/outdoor-industry/" className="drop-item">
                      Focus: Outdoor Industry
                    </a>
                    <a href="https://visiongraphics-inc.com/service/map-printing/" className="drop-item">
                      Focus: Map Printing
                    </a>                  
                  </div>
                }
              </div>
              <div className="menu-item">
                <button onMouseEnter={() => setCurrDrop('about')} onMouseLeave={() => setCurrDrop('')}><a href="https://visiongraphics-inc.com/about/" >About</a></button>
              </div>
              <div className="menu-item">
                <button onMouseEnter={() => setCurrDrop('careers')} onMouseLeave={() => setCurrDrop('')}><a href="https://visiongraphics-inc.com/careers/">Careers</a></button>
              </div>
              <div className="menu-item">
                <button onMouseEnter={() => setCurrDrop('contact')} onMouseLeave={() => setCurrDrop('')}><a href="https://visiongraphics-inc.com/contact-us/">Contact Us</a></button>
                {currDrop === 'contact' &&
                  <div className="dropdown contact-drop" onMouseEnter={() => setCurrDrop('contact')} onMouseLeave={() => setCurrDrop('')}>
                    <a href="https://visiongraphics-inc.com/promotions/" className="drop-item">
                      Sign up for news & promotion notifications!
                    </a>
                  </div>
                }
              </div>
            </div>
          </div>          
        </div>
      </header>
    </Wrap>
  )
}
 
export default VisionHeader;