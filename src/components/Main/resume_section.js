import React from 'react'

export default function site_section() {
    return (
    <div className="site-section about_area" id= "resume-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5"  data-aos="fade-up" data-aos-delay="100">
            <div className="about_img">
              <img className="" src={require('../../assets/about-us.png')} alt=""/>
            </div>
          </div>
  
          <div className="offset-lg-1 col-lg-5" data-aos="fade-up">
            <div className="main_title text-left">
              <h2 style={{fontWeight: 'bold'}}>let me <br/>
                Introduce you to <br/>
                myself</h2>
              <p>
              I am a bachelor degree holder, graduated from UofK in Sudan. I am Electrical Engineer specializing in Software Engineering.
              I started coding as a hobby and I fell in love with it, that's when i became serious about it and couldn't get my
              hands off my keyboard ever since ,And now I am full stack developer.
              </p>
              <p>
              Also iam intersted in Aritificel Intelligence,
              and i'm planning to have a professional career on it.
              </p>
              <a className="primary_btn btn btn-outline-primary py-3 px-5" href="./MaeenCV.pdf" target="_blank" download><span>Download CV</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
