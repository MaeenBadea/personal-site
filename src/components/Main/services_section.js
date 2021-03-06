import React from 'react'

const HEIGHT = 50;
export default function services_section() {
    return (
    
    <div class="site-section features_area" id = "services-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <div class="main_title">
                <h2 style={{fontWeight:'bold'}}>service offers </h2>
                <p style={{fontSize: 25,  fontWeight: '400'}}>
                   HAVE A GLANCE OVER MY SERVICES
                </p>
              </div>
            </div>
          </div>
          <div class="row feature_inner justify-content-center">
            <div class="col-lg-3 col-md-6">
              <div class="feature_item">
                <img src={require('../../assets/react_logo.png')} alt=""/>
                <h4>Web Apps development</h4>
                <p>Fast, responsive and engaging React web apps that bring your ideas to life.<hr/></p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="feature_item">

                <img src={require('../../assets/reactnative_logo.png')} alt=""/>
                <img src={require('../../assets/flutter.png')} style={{width:HEIGHT, height:HEIGHT, borderRadius:HEIGHT/2}} alt=""/>

                <h4>Mobile Apps development</h4>
                <p>Cross-platform reactnative &amp; flutter apps built with efficiency and speed for Android and iOS at once.</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="feature_item">
                <img src={require('../../assets/nodejs.png')} alt=""/>
                <h4>Restful APIS development</h4>
                <p>REST API integration.<br/>
                  REST API development with Node.js .<hr/></p>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
}
