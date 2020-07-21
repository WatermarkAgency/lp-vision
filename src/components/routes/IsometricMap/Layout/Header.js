import React from 'react'
import styled from 'styled-components'
 
const Wrap = styled.div`
 
`
 
const VisionHeader = props => {
  return (
    <header class="header" role="banner">

        {/* <!-- This navs will be applied to the topbar, above all content
             To see additional nav styles, visit the /parts directory --> */}
        
      <div class="top-bar" id="top-bar-menu">
        <div class="grid-container grid-x grid-padding-x no-padding">
            <div class="show-for-medium-only">
                <ul class="menu">
                    <li><button class="menu-icon" type="button" data-toggle="off-canvas" aria-expanded="false" aria-controls="off-canvas">Menu</button>
                    </li>
                </ul>
            </div>
            <div class="large-3 medium-3 cell logo-holder">
                <div class="site-logo">
                    <a href="https://visiongraphics-inc.com"><img src="https://visiongraphics-inc.com/wp-content/themes/vision-graphics-v2/assets/images/vision-graphics-logo.png" alt="Vision graphics logo" /></a>
                </div>
            </div>
            <div class="show-for-large large-9 medium-9 cell">
                <div class="signup-link">
                    <a href="/promotions/">Sign Up for News &amp; Promotion Notifications!</a>
                </div>
            <ul id="menu-main-navigation" class="medium-horizontal menu dropdown" data-responsive-menu="accordion medium-dropdown" role="menubar" data-e="33ukob-e" data-mutate="n6zn8r-responsive-menu"><li id="menu-item-46" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46 is-dropdown-submenu-parent opens-right" role="menuitem" aria-haspopup="true" aria-label="Our Services"><a href="https://visiongraphics-inc.com/service/">Our Services</a>
            <ul class="menu submenu is-dropdown-submenu first-sub vertical" data-submenu="" role="menu">
              <li id="menu-item-314" class="menu-item menu-item-type-post_type menu-item-object-service menu-item-314 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="https://visiongraphics-inc.com/service/print-production/">Printing</a></li>
              <li id="menu-item-311" class="menu-item menu-item-type-post_type menu-item-object-service menu-item-311 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="https://visiongraphics-inc.com/service/direct-mail/">Direct Mail Marketing</a></li>
              <li id="menu-item-310" class="menu-item menu-item-type-post_type menu-item-object-service menu-item-310 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="https://visiongraphics-inc.com/service/print-management-marketing-automation/">Marketing Automation</a></li>
              <li id="menu-item-313" class="menu-item menu-item-type-post_type menu-item-object-service menu-item-313 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="https://visiongraphics-inc.com/service/warehousing-fulfillment/">Warehousing &amp; Fulfillment Center</a></li>
              <li id="menu-item-312" class="menu-item menu-item-type-post_type menu-item-object-service menu-item-312 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="https://visiongraphics-inc.com/service/marketing-analysis-variable-data-solutions/">Marketing Analytics &amp; Variable Data</a></li>
              <li id="menu-item-1555" class="menu-item menu-item-type-post_type menu-item-object-service menu-item-1555 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="https://visiongraphics-inc.com/service/elections-and-ballots/">Election &amp; Ballot Services</a></li>
              <li id="menu-item-309" class="menu-item menu-item-type-post_type menu-item-object-service menu-item-309 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="https://visiongraphics-inc.com/service/custom-broadband-marketing-solutions/">Eagle:xm Cable &amp; Broadband Marketing</a></li>
            </ul>
            </li>
            <li id="menu-item-439" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-439 is-dropdown-submenu-parent opens-right" role="menuitem" aria-haspopup="true" aria-label="Client Resources"><a href="https://visiongraphics-inc.com/blog/">Client Resources</a>
            <ul class="menu submenu is-dropdown-submenu first-sub vertical" data-submenu="" role="menu">
              <li id="menu-item-1347" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1347 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="https://visiongraphics-inc.com/./blog/">Blog</a></li>
              <li id="menu-item-1174" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1174 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="https://visiongraphics-inc.com/./vision-news/">Vision News</a></li>
              <li id="menu-item-1175" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1175 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="https://visiongraphics-inc.com/./print-resources/">Print Resources</a></li>
              <li id="menu-item-1461" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1461 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="https://visiongraphics-inc.com/postal-guidelines/">Postal Guidelines</a></li>
              <li id="menu-item-1176" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1176 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="https://visiongraphics-inc.com/./marketing-innovations/">Marketing Innovations</a></li>
              <li id="menu-item-1179" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1179 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="/events">Events</a></li>
            </ul>
            </li>
            <li id="menu-item-44" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-44 is-dropdown-submenu-parent opens-right" role="menuitem" aria-haspopup="true" aria-label="Our Results"><a href="https://visiongraphics-inc.com/case-studies/">Our Results</a>
            <ul class="menu submenu is-dropdown-submenu first-sub vertical" data-submenu="" role="menu">
              <li id="menu-item-1181" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1181 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="https://visiongraphics-inc.com/case-studies/">Case Studies</a></li>
              <li id="menu-item-1187" class="menu-item menu-item-type-post_type menu-item-object-industry menu-item-1187 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="https://visiongraphics-inc.com/industry/outdoor-industry/">Focus: Outdoor Industry</a></li>
              <li id="menu-item-1221" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1221 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="/service/map-printing/">Focus: Map Printing</a></li>
            </ul>
            </li>
            <li id="menu-item-43" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-43" role="menuitem"><a href="https://visiongraphics-inc.com/about/">About</a></li>
            <li id="menu-item-42" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-42" role="menuitem"><a href="https://visiongraphics-inc.com/careers/">Careers</a></li>
            <li id="menu-item-41" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-41 is-dropdown-submenu-parent opens-right" role="menuitem" aria-haspopup="true" aria-label="Contact Us"><a href="https://visiongraphics-inc.com/contact-us/">Contact Us</a>
            <ul class="menu submenu is-dropdown-submenu first-sub vertical" data-submenu="" role="menu">
              <li id="menu-item-1371" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1371 is-submenu-item is-dropdown-submenu-item" role="menuitem"><a href="https://visiongraphics-inc.com/promotions/">Sign up for news &amp; promotion notifications!</a></li>
            </ul>
            </li>
          </ul>        
          </div>
        </div>
      </div>
    </header>
  )
}
 
export default VisionHeader;