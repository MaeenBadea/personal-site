import React, { Component } from 'react'

export default class NavBar extends Component {

    render() {
        return (           
          
          <header class="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
            
            <div class="container-fluid">
              <div class="d-flex align-items-center">
                <div class="site-logo"><a href="#home-section">Maeen Badea</a></div>
                <div>
                  <nav class="site-navigation position-relative text-right" role="navigation">
                    <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                      <li><a href="#home-section" class="nav-link">Home</a></li>
                      <li><a href="#resume-section" class="nav-link">Resume</a></li>
                      <li><a href="#services-section" class="nav-link">Services</a></li>
                      <li><a href="#process-section" class="nav-link">Process</a></li>
                    </ul>
                  </nav>
                </div>
                <div class="ml-auto">
                  <nav class="site-navigation position-relative text-right" role="navigation">
                    <ul class="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block">
                      <li class="cta"><a href="#contact-section" class="nav-link"><span class="rounded border border-primary">Contact</span></a></li>
                    </ul>
                  </nav>
                  <a href="#" class="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right"><span class="icon-menu h3"></span></a>
                </div>
              </div>
            </div>
            
          </header>
        )
    }
}
