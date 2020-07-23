import React, { useState } from 'react'
import styled from 'styled-components'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
 
const visOrange = '#F15C2B';

const mobileMenuWidth = '300px'

const Wrap = styled.div`
  padding: 2rem 4rem;
  position: relative;
  header {
    position: relative;
    .content-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .logo-wrap {
        position: relative;
        right: 0;
        transition: right .3s ease;
        &.burger-open {
          right: -30vw;
          transition: right .3s ease;
        }
      }
      .burger-button {        
        position: absolute;
        z-index: 50;
        left: 0;
        display: none;
        margin-right: 15px;
        margin-left: 0px;
        transition: margin-left .3s ease;
        button {
          background: white;
          border: none;
          border-radius: 50%;
          padding-top: 15px;
          .line {
            width: 30px;
            height: 2px;
            background: black;
            margin-bottom: 5px;
            &.top, &.mid, &.bot {
              position: relative;
              transition: all .3s ease;
            }
          }
        }
        &.open {
          margin-left: 250px;
          transition: margin-left .3s ease;
          button {
            .line.top {
              top: 7px;
              transform: rotate(45deg);
              transition: all .3s ease;
            }
            .line.mid {
              opacity: 0;
              transition: opacity .2s ease;
            }
            .line.bot {
              top: -8px;
              transform: rotate(-45deg);
              transition: all .3s ease;
            }
          }
        }
      }
      .mobile-menu {
        position: fixed;
        z-index: 1000;
        left: -${mobileMenuWidth};
        top: 0;
        height: 100vh;
        display: flex;
        flex-wrap: nowrap;
        transition: left .3s ease;
        .menu-col {
          position: relative;
          width: ${mobileMenuWidth};
          height: 100%;
          background: ${visOrange};
          overflow: hidden;
          .menu-item {
            width: ${mobileMenuWidth};   
            position: relative;  
            font-size: 1.2rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            :hover {
              background: rgba(0,0,0,0.2);
            }       
            a {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              padding: 13px 20px;
              color: white;
              font-weight: 200;            
              width: ${mobileMenuWidth};
              // height: 40px;
              line-height: 20px;
              :hover {
                text-decoration: none;
              }
            }
            button {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              padding: 20px;
              font-weight: 200; 
              background: none;
              border: none;
              color: white;
            }
            button:not(.back) {
              position: absolute;
              right: 0;
              font-size: 2rem;
            }
            button.back {
              width: 100%;
              text-align: left;
              padding: 0px 20px;
              span {
                position: relative;
                top: -4px;
                font-size: 2rem;
                margin-right: .5rem;
              }
            }
          }
          .submenu {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            z-index: 50;
            background: ${visOrange};
            left: ${mobileMenuWidth};
            transition: left .3s ease;
            &.open {
              left: 0;
              transition: left .3s ease;
            }
          }
        }
        .offclick-col {
          position: relative;
          left: -50px;
          width: 0px;
          height: 100%;
          button {
            width: 0;
            height: 100%;
            background: none;
            border: none;
          }
        }
        &.open {
          left: 0px;
          transition: left .3s ease;
          .offclick-col {
            left: 0;
            width: 100vw;
            button {
              width: 100vw;
            }
          }
        }
      }
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
  @media only screen and (max-width: 1000px) {
    .content-wrap {
      justify-content: center !important;
      .burger-button {
        display: block !important;
      }
      .menu-items-wrap {
        display: none;
      }
    }
  }
`
 
const VisionHeader = props => {
  const [currDrop, setCurrDrop] = useState('')
  const [burgerOpen, setBurgerOpen] = useState(false)
  const [currBurgSubMenu, setCurrBurgSubMenu] = useState('')
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen)
  }
  return (
    <Wrap>
      <header className="header" role="banner">
        <div className="content-wrap">
          <div className={burgerOpen ? "burger-button open" : "burger-button"}>
            <button onClick={() => toggleBurger()}>
              <div className="line top" />
              <div className="line mid" />
              <div className="line bot" />
            </button>
          </div>
          <div className={burgerOpen ? "mobile-menu open" : "mobile-menu"}>
            <div className="menu-col">
              <div className="main-menu">
                <div className="menu-item">
                  <a href="https://visiongraphics-inc.com/">Home</a>
                </div>
                <div className="menu-item">
                  <a href="https://visiongraphics-inc.com/service/">Our Services</a>
                  <button onClick={() => setCurrBurgSubMenu('services')}><IoMdArrowDropright /></button>
                </div>
                <div className="menu-item">
                  <a href="https://visiongraphics-inc.com/blog/">Blog & Resources</a>
                </div>
                <div className="menu-item">
                  <a href="https://visiongraphics-inc.com/case-studies/">Our Results</a>
                  <button onClick={() => setCurrBurgSubMenu('results')}><IoMdArrowDropright /></button>
                </div>
                <div className="menu-item">
                  <a href="https://visiongraphics-inc.com/about/">About</a>
                </div>
                <div className="menu-item">
                  <a href="https://visiongraphics-inc.com/careers/">Careers</a>
                </div>
                <div className="menu-item">
                  <a href="https://visiongraphics-inc.com/contact-us/">Contact Us</a>
                </div>
                <div className="menu-item">
                  <a href="https://visiongraphics-inc.com/promotions/">Sign up for news & promotion notifications!</a>
                </div>
              </div>
              <div className={currBurgSubMenu === "services" ? "submenu open" : "submenu"}>
                <div className="menu-item">
                  <button className="back" onClick={() => setCurrBurgSubMenu('')} ><span><IoMdArrowDropleft /> </span>{` `}Back</button>
                </div>
                <div className="menu-item">
                  <a href="https://visiongraphics-inc.com/service/print-production/">Printing Services</a>
                </div>
                <div className="menu-item">
                  <a href="https://visiongraphics-inc.com/service/print-management-marketing-automation/">Tangible Marketing Automation</a>
                </div>
                <div className="menu-item">
                  <a href="https://visiongraphics-inc.com/service/warehousing-fulfillment/">Warehousing & Fullfillment Center</a>
                </div>
                <div className="menu-item">
                  <a href="https://visiongraphics-inc.com/service/direct-mail/">Direct Mail Marketing Services</a>
                </div>
                <div className="menu-item">
                  <a href="https://visiongraphics-inc.com/service/marketing-analysis-variable-data-solutions/">Marketing Analytics & Variable Data</a>
                </div>
                <div className="menu-item">
                  <a href="https://visiongraphics-inc.com/service/custom-broadband-marketing-solutions/">Eagle:xm Cable & Broadband Marketing Solutions</a>
                </div>
              </div>
              <div className={currBurgSubMenu === "results" ? "submenu open" : "submenu"}>
                <div className="menu-item">
                  <button className="back" onClick={() => setCurrBurgSubMenu('')} ><span><IoMdArrowDropleft /> </span>{` `}Back</button>
                </div>
                <div className="menu-item">
                  <a href="https://visiongraphics-inc.com/case-studies/">Case Studies</a>
                </div>
                <div className="menu-item">
                  <a href="https://visiongraphics-inc.com/industry/outdoor-industry/">Focus: Outdoor Industry</a>
                </div>
              </div>
            </div>
            <div className="offclick-col">
              <button onClick={() => setBurgerOpen(false)} />
            </div>
          </div>
          <div className={burgerOpen ? "logo-wrap burger-open" : "logo-wrap"}>
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