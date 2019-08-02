import React, { Component } from 'react';
import HomeSection from './home_section';
import SiteSection from './resume_section';
import ServiceSection from './services_section';
import SkillSection from './skill_section';
import ContactSection from './contact_section';
import ProcessSection from './process_section';

export default class Main extends Component {
    render() {
        return (
            <div>
                <HomeSection />
                <SiteSection/>
                <ServiceSection/>
                <ProcessSection />
                <ContactSection/>
                
            </div>
        )
    }
}
