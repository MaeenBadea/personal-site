import React from 'react'

export default function home_section() {
    return (
    <div class="intro-section" id="home-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 mr-auto" data-aos="fade-up">
            <h1>Hello , I'm Maeen</h1>
            <p class="mb-5">producing high quality Mobile &amp; Web apps with exceptional user experince</p>
            <div>
            <nav class="site-navigation" role="navigation">
                    <ul class="site-menu main-menu mr-auto d-lg-block home_ul_no_dots">
                      <li ><p><a href="#resume-section" class="btn btn-outline-light py-3 px-5">Get Started</a></p></li>
                    </ul>
            </nav>
                
            </div>
            
          </div>
          <div class="col-lg-2 ml-auto"  data-aos="fade-up" data-aos-delay="100">
            <figure class="img-absolute">
              <img src= {require('../../assets/home-right.png')} alt="Image" class="img-fluid"/>
            </figure>
          </div>
        </div>
      </div>
    </div>

    )
}
