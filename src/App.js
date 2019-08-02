import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div className="site-wrap">
      <div class="site-mobile-menu site-navbar-target">
            <div class="site-mobile-menu-header">
              <div class="site-mobile-menu-close mt-3">
                <span class="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div class="site-mobile-menu-body"></div>
      </div>

      <NavBar />
      <Main/>
      <Footer/>
         
      
    </div>
  );
}

export default App;
